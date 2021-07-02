import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from 'components/layouts/Page/styled';
import { Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'services/redux/hooks';
import { fetchBook } from 'services/redux/slices/mainBook/thunks';
import LayoutWrapper from 'components/wrappers/LayoutWrapper';
import BookCover from './BookCover';
import BookDetails from './BookDetails';

export default function MainBook() {
   const router = useRouter();
   const dispatch = useAppDispatch();

   useEffect(() => {
      const { id } = router.query as any;
      dispatch(fetchBook(id));
   }, [router.query.id]);

   return (
      <LayoutWrapper pageName="main-book" pageTitle="Main Book">
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Main Book</PageTitle>

            <Grid container spacing={2}>
               <Grid item xs={12} sm={4} md={3}>
                  <BookCover />
               </Grid>

               <Grid item xs={12} sm={8} md={9}>
                  <BookDetails />
               </Grid>
            </Grid>
         </PageContainer>
      </LayoutWrapper>
   );
}
