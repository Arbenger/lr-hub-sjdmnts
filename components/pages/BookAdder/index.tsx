import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from '../../layouts/Page/styled';
import { ContentContainer } from './styled';
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { FormEvent, Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useAppDispatch } from 'redux/hooks';
import { setBook } from 'redux/qrCodeGeneratorSlice';

export default function BookAdder() {
   const router = useRouter();
   const dispatch = useAppDispatch();
   const [title, setTitle] = useState('');
   const [copies, setCopies] = useState(0);
   const [description, setDescription] = useState('');
   const [isPending, setIsPending] = useState(false);

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!title || !description) return alert('The form is incomplete!');
      if (!confirm('Are you ready to proceed?')) return;

      setIsPending(true);

      const dateAdded = new Date().getTime();

      const response = await axios({
         url: '/api/book-adder',
         method: 'POST',
         params: {
            title,
            description,
            copies,
            dateAdded,
            secretAPIAccessKey: process.env.secretAPIAccessKey,
         },
      });

      setIsPending(false);

      if (response.data.status === 'failure') {
         const deleteResponse = await axios({
            url: '/api/book-deleter',
            method: 'POST',
            params: {
               title,
               dateAdded,
               secretAPIAccessKey: process.env.secretAPIAccessKey,
            },
         });
         return alert('Sorry, please try again!');
      }

      dispatch(
         setBook({
            bookId: response.data.bookId,
            bookTitle: response.data.bookTitle,
            copiesIds: response.data.copiesIds,
         })
      );

      router.push(`/admin/qr-code-generator`);
   };

   return (
      <Fragment>
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Book Adder</PageTitle>
            <ContentContainer>
               <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           label="Book Title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           fullWidth
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           type="number"
                           label="Book Copies"
                           value={copies}
                           onChange={(e) =>
                              setCopies(parseInt(e.target.value || '0'))
                           }
                           InputProps={{ inputProps: { min: 0 } }}
                           fullWidth
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           label="Book Description"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                           multiline
                           fullWidth
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <Box display="flex" justifyContent="flex-end">
                           <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                              disabled={isPending}
                           >
                              {isPending ? '...' : 'Submit'}
                           </Button>
                        </Box>
                     </Grid>
                  </Grid>
               </form>
            </ContentContainer>
         </PageContainer>
      </Fragment>
   );
}
