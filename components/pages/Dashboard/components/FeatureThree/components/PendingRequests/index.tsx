import { Header, HeaderTitle, List } from './styled';
import { Button, Paper } from '@material-ui/core';
import { Item as ItemType } from 'components/pages/PendingRequests/components/FeatureOne/types';
import Item from 'components/pages/PendingRequests/components/FeatureOne/components/Item';
import Link from 'next/link';

export default function PendingRequests() {
   const items: ItemType[] = [
      {
         type: 'borrow',
         createdAt: new Date(1621142681607),
      },
      {
         type: 'return',
         createdAt: new Date(1621142681607),
      },
      {
         type: 'resolve',
         createdAt: new Date(1621142681607),
      },
      {
         type: 'borrow',
         createdAt: new Date(1621142681607),
      },
      {
         type: 'return',
         createdAt: new Date(1621142681607),
      },
      {
         type: 'resolve',
         createdAt: new Date(1621142681607),
      },
   ];

   return (
      <Paper>
         <Header>
            <HeaderTitle variant="body1">Pending Requests</HeaderTitle>
            <Link href="pending-requests">
               <Button variant="text" color="primary">
                  View All
               </Button>
            </Link>
         </Header>
         <List>
            {items.map((item, index) => (
               <Item key={index} type={item.type} createdAt={item.createdAt} />
            ))}
         </List>
      </Paper>
   );
}
