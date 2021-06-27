import { Box, styled } from '@material-ui/core';
import { flexCenter } from 'components/wrappers/ThemeWrapper/mixins';
import Color from 'color';

export const Container = styled(Box)(({ theme: { palette, spacing } }) => ({
   ...flexCenter,
   paddingBottom: spacing(3),
   textAlign: 'center',
   backgroundColor: palette.primary.dark,
}));

export const WaveBackground = styled(Box)(({ theme: { palette } }) => {
   const dark = Color(palette.primary.dark).object();
   return {
      width: '100%',
      height: 50,
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='500' height='50' preserveAspectRatio='none' viewBox='0 0 500 50'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1127%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c17 C 25%2c19.4 75%2c29.2 125%2c29 C 175%2c28.8 200%2c15.6 250%2c16 C 300%2c16.4 325%2c33.8 375%2c31 C 425%2c28.2 475%2c7.8 500%2c2L500 50L0 50z' fill='rgba(${dark.r}%2c ${dark.g}%2c ${dark.b}%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1127'%3e%3crect width='500' height='50' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
      backgroundSize: '100vw 50px',
      backgroundPositionY: 'bottom',
      backgroundPositionX: 'center',
      backgroundColor: '#212121',
   };
});
