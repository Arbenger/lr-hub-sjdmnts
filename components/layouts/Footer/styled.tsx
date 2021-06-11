import { Box, styled } from '@material-ui/core';

export const Container = styled(Box)(({ theme: { palette } }) => ({
   color: palette.primary.contrastText,
   backgroundColor: 'transparent',
}));
