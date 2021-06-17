import { styled, Box } from '@material-ui/core';
import { flexStartCenter } from 'components/wrapper/ThemeWrapper/mixins';

export const Container = styled(Box)({
   ...flexStartCenter,
   flexGrow: 1,
});
