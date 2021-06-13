import {
   BorrowedBookIcon,
   ReturnedBookIcon,
   ExpiredBookIcon,
   LostBookIcon,
   BookmarkIcon,
   PenaltyIcon,
} from 'components/Icons';
import { ItemContainer, ItemCaption, ItemDisplay } from './styled';
import { Box, Grid, Typography } from '@material-ui/core';
import { useAppSelector } from 'services/redux/hooks';
import { selectLayout } from 'services/redux/selectors';
import { Item } from './types';
import Link from 'next/link';

export default function FeatureOne() {
   const { drawer } = useAppSelector(selectLayout);
   const items: Item[] = [
      {
         title: 'Borrowed Books',
         quantity: 5,
         link: '/book/borrowed',
         icon: <BorrowedBookIcon />,
      },
      {
         title: 'Returned Books',
         quantity: 15,
         link: '/book/returned',
         icon: <ReturnedBookIcon />,
      },
      {
         title: 'Expired Books',
         quantity: 2,
         link: '/book/expired',
         icon: <ExpiredBookIcon />,
      },
      {
         title: 'Lost Books',
         quantity: 0,
         link: '/book/lost',
         icon: <LostBookIcon />,
      },
      {
         title: 'Bookmarks',
         quantity: 12,
         link: '/book/bookmarks',
         icon: <BookmarkIcon />,
      },
      {
         title: 'Penalties',
         quantity: 1,
         link: '/account/penalties',
         icon: <PenaltyIcon />,
      },
   ];

   return (
      <Box>
         <Grid container spacing={2}>
            {items.map((item) => (
               <Grid
                  key={item.title}
                  item
                  xs={12}
                  sm={6}
                  md={drawer.isOpen ? 6 : 4}
                  lg={4}
               >
                  <Link href={item.link}>
                     <ItemContainer>
                        <ItemCaption>
                           <Typography variant="h4">{item.quantity}</Typography>
                           <Typography variant="h6">{item.title}</Typography>
                        </ItemCaption>
                        <ItemDisplay>{item.icon}</ItemDisplay>
                     </ItemContainer>
                  </Link>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
}
