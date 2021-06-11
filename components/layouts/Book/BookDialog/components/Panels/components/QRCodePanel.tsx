import { Box, Container, Paper, Typography } from '@material-ui/core';
import QRCode from 'qrcode.react';

export default function QRCodePanel() {
   return (
      <Container maxWidth="lg">
         <Box width="fit-content" margin="auto" marginTop={4}>
            <Paper>
               <Box textAlign="center" padding={4} paddingBottom={0}>
                  <QRCode
                     size={250}
                     value={JSON.stringify({ bookId: '2893u2358sdf' })}
                  />
                  <Typography variant="h6">2893u2358sdf</Typography>
               </Box>
            </Paper>
         </Box>
      </Container>
   );
}
