import { makeStyles, Paper } from '@material-ui/core';
import { flexCenter } from 'components/wrapper/ThemeWrapper/mixins';
import { NO_IMAGE } from 'utils/variables';
import Image from 'next/image';

const useStyles = makeStyles(({ spacing, palette }) => ({
   root: {
      ...flexCenter,
      height: '100%',
      padding: spacing(2),
      backgroundColor: 'rgba(255, 255, 255, .9)',
   },
   imageContainer: {
      ...flexCenter,
      padding: spacing(1),
      backgroundColor: palette.primary.main,
   },
}));

export default function FeatureOne() {
   const classes = useStyles();

   return (
      <Paper className={classes.root}>
         <Paper className={classes.imageContainer}>
            <Image src={NO_IMAGE} width={350} height={400} objectFit="cover" />
         </Paper>
      </Paper>
   );
}
