import { Header, HeaderTitle, List } from './styled';
import { Paper, Button } from '@material-ui/core';
import { Item as ItemType } from 'components/pages/Notifications/components/FeatureOne/types';
import Item from 'components/pages/Notifications/components/FeatureOne/components/Item';
import Link from 'next/link';

export default function Notifications() {
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
         type: 'resolveDenied',
         createdAt: new Date(1621142681607),
      },
   ];

   return (
      <Paper>
         <Header>
            <HeaderTitle variant="body1">Notifications</HeaderTitle>
            <Link href="/notifications">
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
