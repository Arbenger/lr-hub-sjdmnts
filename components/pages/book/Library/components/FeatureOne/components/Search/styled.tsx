import { Paper, styled, IconButton as MuiIconButton } from '@material-ui/core';
import { flexStartCenter } from 'components/wrappers/ThemeWrapper/mixins';

export const Container = styled(Paper)(({ theme: { spacing } }) => ({
   padding: spacing(2),
}));

export const Form = styled('form')({
   ...flexStartCenter,
   width: '100%',
});

export const IconButton = styled(MuiIconButton)(({ theme: { spacing } }) => ({
   marginRight: spacing(1),
}));
