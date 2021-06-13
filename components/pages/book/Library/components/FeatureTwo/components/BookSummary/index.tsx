import {
   BorrowedBookIcon,
   UnbookmarkedStateIcon,
   MoreIcon,
} from 'components/Icons';
import {
   Container,
   Description,
   Cover,
   Title,
   Subtitle,
   ActionsContainer,
   ActionsWrapper,
} from './styled';
import { Grid, IconButton } from '@material-ui/core';
import { Book } from 'services/redux/slices/library/types';
import Image from 'next/image';

interface Props {
   book: Book;
}

export default function BookSummary({ book }: Props) {
   return (
      <Container>
         <Grid container spacing={2}>
            <Grid item xs={5}>
               <Cover>
                  <Image
                     src={`/images/book-cover-1.png`}
                     width="auto"
                     height="auto"
                     objectFit="cover"
                  />
               </Cover>
            </Grid>

            <Grid item xs={7}>
               <Title>{book.title}</Title>

               <Subtitle variant="body2">
                  {book.copies.available} available copies
               </Subtitle>

               <ActionsContainer>
                  <ActionsWrapper>
                     <IconButton color="inherit">
                        <BorrowedBookIcon />
                     </IconButton>

                     <IconButton color="inherit">
                        <UnbookmarkedStateIcon />
                     </IconButton>

                     <IconButton color="inherit">
                        <MoreIcon />
                     </IconButton>
                  </ActionsWrapper>
               </ActionsContainer>
            </Grid>

            <Grid item xs={12}>
               <Title>Description</Title>
               <Description variant="body2">{book.description}</Description>
            </Grid>
         </Grid>
      </Container>
   );
}
