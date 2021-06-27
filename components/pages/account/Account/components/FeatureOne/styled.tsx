import {
   Box,
   Paper,
   styled,
   TextField as MuiTextField,
} from '@material-ui/core';
import { flexCenter } from 'components/wrappers/ThemeWrapper/mixins';
import Image from 'next/image';

export const Container = styled(Paper)(({ theme: { spacing } }) => ({
   padding: spacing(2),
}));

export const PictureContainer = styled(Box)({
   ...flexCenter,
   width: '100%',
});

export const PictureBorder = styled(Paper)(({ theme: { palette } }) => ({
   ...flexCenter,
   width: 160,
   height: 160,
   borderRadius: '50%',
   backgroundColor: palette.primary.main,
}));

export const Picture = styled(Image)({
   borderRadius: '50%',
});

export const TextField = styled(MuiTextField)({
   width: '100%',
});
