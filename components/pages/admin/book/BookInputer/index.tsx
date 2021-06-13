import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from 'components/layouts/Page/styled';
import { Fragment } from 'react';
import Form from './components/Form';
import ProceedConfirmationDialog from './components/ProceedConfirmationDialog';
import PrintConfirmationDialog from './components/PrintConfirmationDialog';

export default function BookAdder() {
   return (
      <Fragment>
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Book Adder</PageTitle>

            <Form />

            <ProceedConfirmationDialog />
            <PrintConfirmationDialog />
         </PageContainer>
      </Fragment>
   );
}
