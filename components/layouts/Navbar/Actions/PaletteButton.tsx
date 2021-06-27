import {
   Box,
   Grid,
   IconButton,
   makeStyles,
   Paper,
   Popover,
   Tooltip,
} from '@material-ui/core';
import {
   getKeys,
   getPalettesObjectOfObjects,
} from 'components/wrappers/ThemeWrapper/utils';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { changePalette } from 'services/redux/slices/theme';
import { selectTheme } from 'services/redux/selectors';
import { PaletteIcon } from 'components/Icons';
import { Fragment } from 'react';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PaletteButton() {
   const themeRedux = useAppSelector(selectTheme);
   const dispatch = useAppDispatch();
   const appPaletteKeys = getKeys();

   const classes = makeStyles(({ spacing }) => {
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
   })();

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
                                    data-active={themeRedux.current === key}
                                    onClick={() => dispatch(changePalette(key))}
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
