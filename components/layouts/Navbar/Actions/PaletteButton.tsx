import {
   Box,
   Grid,
   IconButton,
   makeStyles,
   Paper,
   Popover,
   Tooltip,
   useTheme,
} from '@material-ui/core';
import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { changeAppPalette } from 'services/redux/themeSlice';
import { AppPaletteKey } from 'components/wrapper/ThemeWrapper/types';
import {
   getKeys,
   getPalettesObjectOfObjects,
} from 'components/wrapper/ThemeWrapper/utils';
import { PaletteIcon } from 'components/Icons';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { selectTheme } from 'services/redux/selectors';

const useStyles = makeStyles(({ spacing }) => {
   const appPalette = getPalettesObjectOfObjects();
   const appPaletteStyles = (() => {
      const keys = getKeys();
      let properties = {};

      keys.forEach((item) => {
         const palette = appPalette[item];
         properties[`&.${item}`] = {
            backgroundColor: palette.main,
            "&:hover, &[data-active='true']": {
               borderColor: palette.dark,
            },
         };
      });
      return properties;
   })();

   return {
      root: {
         maxWidth: 160,
         padding: spacing(1),
      },
      paletteItem: {
         width: 30,
         height: 30,
         borderRadius: 5,
         borderWidth: 4,
         borderStyle: 'solid',
         borderColor: 'transparent',
         cursor: 'pointer',
         ...appPaletteStyles,
      },
   };
});

export default function PaletteButton() {
   const dispatch = useAppDispatch();
   const theme = useTheme();
   const classes = useStyles();
   const appPaletteKeys = getKeys();
   const { appPalette } = useAppSelector(selectTheme);

   const handleItemClick = (item: AppPaletteKey) => {
      dispatch(changeAppPalette(item));
   };

   return (
      <PopupState variant="popover" popupId="palettte-selector">
         {(popupState) => (
            <Fragment>
               <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="palette"
                  {...bindTrigger(popupState)}
               >
                  <PaletteIcon />
               </IconButton>

               <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'center',
                  }}
                  transformOrigin={{
                     vertical: 'top',
                     horizontal: 'center',
                  }}
               >
                  <Paper className={classes.root}>
                     <Grid container spacing={1}>
                        {appPaletteKeys.map((key) => (
                           <Grid item key={key}>
                              <Tooltip title={key} aria-label={key}>
                                 <Box
                                    className={`${classes.paletteItem} ${key}`}
                                    data-active={appPalette.current === key}
                                    onClick={() => handleItemClick(key)}
                                 />
                              </Tooltip>
                           </Grid>
                        ))}
                     </Grid>
                  </Paper>
               </Popover>
            </Fragment>
         )}
      </PopupState>
   );
}
