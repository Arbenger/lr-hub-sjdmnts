import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Popover,
  Tooltip,
  useTheme,
} from "@material-ui/core";
import { Fragment } from "react";
import { useAppDispatch } from "redux/hooks";
import { BiPalette as PaletteIcon } from "react-icons/bi";
import { changeAppPalette } from "redux/themeSlice";
import { AppPaletteKey } from "components/layouts/ThemeSetter/types";
import { getKeys } from "components/layouts/ThemeSetter/utils";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const useStyles = makeStyles(({ spacing, appPalette }) => {
  const appPalettesStyles = (() => {
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
      borderStyle: "solid",
      borderColor: "transparent",
      cursor: "pointer",
      ...appPalettesStyles,
    },
  };
});

export default function PaletteButton() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const classes = useStyles();
  const appPaletteKeys = getKeys();

  const handleItemClick = (item: AppPaletteKey) => {
    dispatch(changeAppPalette(item));
  };

  return (
    <PopupState variant="popover" popupId="palettte-selector">
      {(popupState) => (
        <Fragment>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="palette"
            {...bindTrigger(popupState)}
          >
            <PaletteIcon />
          </IconButton>

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Paper className={classes.root}>
              <Grid container spacing={1}>
                {appPaletteKeys.map((key) => (
                  <Grid item key={key}>
                    <Tooltip title={key} aria-label={key}>
                      <Box
                        className={`${classes.paletteItem} ${key}`}
                        data-active={theme.appPalette.current === key}
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
