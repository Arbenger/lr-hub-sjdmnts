import { Paper, Box, Button, List } from '@material-ui/core';
import { Item as ItemType } from './types';
import BookListItem from 'components/layouts/Book/BookListItem';

export default function FeatureOne() {
   const items: ItemType[] = [
      {
         bookTitle: 'Sample book title',
         imageUrl: '/images/book-cover-1.png',
         createdAt: new Date(1622983974222),
      },
      {
         bookTitle: 'Sample book title',
         imageUrl: '/images/book-cover-2.png',
         createdAt: new Date(1622983974222),
      },
      {
         bookTitle: 'Sample book title',
         imageUrl: '/images/book-cover-3.png',
         createdAt: new Date(1622983974222),
      },
      {
         bookTitle: 'Sample book title',
         imageUrl: '/images/book-cover-4.png',
         createdAt: new Date(1622983974222),
      },
      {
         bookTitle: 'Sample book title',
         imageUrl: '/images/book-cover-5.png',
         createdAt: new Date(1622983974222),
      },
      {
         bookTitle: 'Sample book title',
         imageUrl: '/images/book-cover-1.png',
         createdAt: new Date(1622983974222),
      },
   ];

   return (
      <Paper>
         <List>
            {items.map((item, index) => (
               <BookListItem
                  key={index}
                  bookTitle={item.bookTitle}
                  imageUrl={item.imageUrl}
                  createdAt={item.createdAt}
               />
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
