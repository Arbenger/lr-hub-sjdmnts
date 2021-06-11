import { Box, styled, Typography } from '@material-ui/core';
import {
   flexCenter,
   flexStartCenter,
} from 'components/layouts/ThemeSetter/mixins';

export const Container = styled(Box)(({ theme: { palette } }) => ({
   color: palette.common.white,
   backgroundColor: palette.grey[800],
   userSelect: 'none',
}));

export const MenuContainer = styled(Box)(({ theme: { palette } }) => ({
   overflowY: 'auto',
   overflowX: 'hidden',
   '&::-webkit-scrollbar': {
      backgroundColor: palette.grey[800],
   },
   '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'var(--base-light)',
   },
}));

export const Header = styled(Typography)(({ theme: { palette, spacing } }) => ({
   color: palette.common.white,
   padding: spacing(2),
   paddingBottom: 0,
}));

export const Menu = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
}));

export const MenuItem = styled(Box)(({ theme: { palette, spacing } }) => ({
   ...flexStartCenter,
   padding: `${spacing(1.5)}px ${spacing(2)}px`,
   cursor: 'pointer',
   "&:hover, &[data-is-active='true']": {
      backgroundColor: palette.grey[700],
   },
}));

export const MenuIcon = styled(Box)(({ theme: { spacing } }) => ({
   ...flexCenter,
   width: 32,
   height: 32,
   fontSize: 32,
   marginRight: spacing(2),
}));

export const MenuTitle = styled(Typography)({
   whiteSpace: 'nowrap',
});
