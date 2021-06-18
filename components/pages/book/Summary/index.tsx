import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from 'components/layouts/Page/styled';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export default function BookSummary() {
   const router = useRouter();

   return (
      <Fragment>
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Book Summary</PageTitle>
         </PageContainer>
      </Fragment>
   );
}
