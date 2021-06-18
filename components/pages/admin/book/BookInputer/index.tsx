import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from 'components/layouts/Page/styled';
import { Fragment, useRef } from 'react';
import Form from './components/Form';
import MetaDataDialog from './components/MetaDataDialog';
import CoverDialog from './components/CoverDialog';
import PrintDialog from './components/PrintDialog';

export default function BookAdder() {
   const fileRef = useRef<HTMLInputElement>();

   return (
      <Fragment>
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Book Adder</PageTitle>

            <Form fileRef={fileRef} />

            <MetaDataDialog fileRef={fileRef} />
            <CoverDialog fileRef={fileRef} />
            <PrintDialog fileRef={fileRef} />
         </PageContainer>
      </Fragment>
   );
}
