import { Paper, Typography, styled, Box } from '@material-ui/core';
import { flexCenter } from 'components/wrapper/ThemeWrapper/mixins';

export const RootContainer = styled(Box)(
   ({ theme: { spacing, breakpoints } }) => ({
      paddingTop: spacing(2),
      paddingBottom: spacing(2),
      [breakpoints.only('xs')]: {
         marginBottom: spacing(8),
      },
   })
);

export const ContentContainer = styled(Paper)(({ theme: { spacing } }) => ({
   padding: spacing(4),
}));

export const DisplayContainer = styled(Box)({
   ...flexCenter,
   width: '100%',
   height: '100%',
});

export const IconContainer = styled(Box)(
   ({ theme: { palette, breakpoints } }) => ({
      ...flexCenter,
      width: 300,
      height: 300,
      fontSize: 100,
      color: 'white',
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%25' id='blobSvg'%3E%3Cpath id='blob' d='M481.5,293Q472,336,451.5,375.5Q431,415,388,428Q345,441,308,457Q271,473,232.5,460.5Q194,448,147,448.5Q100,449,88.5,403Q77,357,60,323Q43,289,41,250Q39,211,47.5,170.5Q56,130,81,94.5Q106,59,149.5,54.5Q193,50,232.5,30Q272,10,307,38Q342,66,380,81.5Q418,97,432.5,135.5Q447,174,469,212Q491,250,481.5,293Z' fill='%23${palette.primary.main.replace(
         '#',
         ''
      )}'%3E%3C/path%3E%3C/svg%3E")`,
      backgroundSize: '300px 300px',
      backgroundPosition: 'center',
      [breakpoints.only('sm')]: {
         width: 200,
         height: 200,
         backgroundSize: '200px 200px',
      },
   })
);

export const Title = styled(Typography)(({ theme: { spacing } }) => ({
   marginBottom: spacing(2),
}));

export const Body = styled(Typography)({
   textIndent: '2rem',
});
