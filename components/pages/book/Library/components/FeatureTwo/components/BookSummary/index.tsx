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
import { useEffect, useMemo } from 'react';
import { NO_IMAGE } from 'utils/variables';
import { Grid, IconButton } from '@material-ui/core';
import { Book } from 'services/redux/slices/library/types';
import { storageRef } from 'services/firebase/client';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
   book: Book;
}

export default function BookSummary({ book }: Props) {
   const [url, setURL] = useState(NO_IMAGE);

   useEffect(() => {
      let isMounted = true;

      (async () => {
         try {
            const coverRef = storageRef.child(`bookCovers/${book.id}.png`);
            const url = await coverRef.getDownloadURL();
            isMounted && setURL(url);
         } catch (error) {
            isMounted && setURL(NO_IMAGE);
         }
      })();

      return () => {
         isMounted = false;
      };
   }, [book.id]);

   return (
      <Container>
         <Grid container spacing={2}>
            <Grid item xs={5}>
               <Cover>
                  <Image
                     src={url}
                     width="auto"
                     height="auto"
                     objectFit="cover"
                  />
               </Cover>
            </Grid>

            <Grid item xs={7}>
               <Title>{book.title}</Title>

               <Subtitle variant="body2">
                  {book.statistics.available} available copies
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
