import { Paper, Box, Typography } from '@material-ui/core';

export default function BookEmpty() {
   return (
      <Paper>
         <Box
            width="100%"
            height={280}
            display="flex"
            alignItems="center"
            justifyContent="center"
         >
            <Typography variant="h6">Empty</Typography>
         </Box>
      </Paper>
   );
}
