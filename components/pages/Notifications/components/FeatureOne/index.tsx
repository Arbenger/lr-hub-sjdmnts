import { Box, Button, List, Paper } from '@material-ui/core';
import { Item as ItemType } from './types';
import Item from './components/Item';

export default function FeatureOne() {
   const items: ItemType[] = [
      {
         type: 'borrowAccepted',
         createdAt: new Date(1621142681607),
      },
      {
         type: 'borrowDenied',
         createdAt: new Date(1621142681607),
      },
      {
         type: 'returnAccepted',
         createdAt: new Date(1621142681607),
      },
      {
         type: 'returnDenied',
         createdAt: new Date(1621142681607),
      },
      {
         type: 'resolveAccepted',
         createdAt: new Date(1621142681607),
      },
      {
         type: 'resolveAccepted',
         createdAt: new Date(1621142681607),
      },
   ];

   return (
      <Paper>
         <List>
            {items.map((item, index) => (
               <Item key={index} type={item.type} createdAt={item.createdAt} />
            ))}
         </List>
         <Box padding={2} paddingTop={0}>
            <Button variant="contained" color="primary" fullWidth>
               Load More
            </Button>
         </Box>
      </Paper>
   );
}
