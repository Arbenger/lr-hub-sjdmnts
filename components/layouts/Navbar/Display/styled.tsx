import { styled, Box } from '@material-ui/core';
import { flexStartCenter } from 'components/layouts/ThemeSetter/mixins';

export const Container = styled(Box)({
   ...flexStartCenter,
   flexGrow: 1,
});
