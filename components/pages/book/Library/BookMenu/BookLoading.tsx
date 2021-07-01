import { makeStyles, Box, Paper } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { NO_IMAGE } from 'utils/variables';
import Image from 'next/image';

export default function BookLoading() {
   const classes = makeStyles(() => ({
      root: {
         display: 'flex',
         flexDirection: 'column',
         overflow: 'hidden',
      },
   }))();

   return (
      <Paper className={classes.root}>
         <Box bgcolor="#D6D6D6">
            <Image
               src={NO_IMAGE}
               width="100%"
               height="auto"
               layout="responsive"
               objectFit="cover"
               objectPosition="center top"
            />
         </Box>

         <Box padding={2}>
            <Skeleton width="100%" height={32} />
            <Skeleton width="60%" height={24} />
         </Box>
      </Paper>
   );
}
