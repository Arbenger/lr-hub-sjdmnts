import { Fragment } from 'react';
import {
   PageContainer,
   PageTitle,
   WaveBackground,
} from 'components/layouts/Page/styled';
import { ContentContainer, ContentText } from './styled';
import LayoutWrapper from 'components/wrappers/LayoutWrapper';

export default function TermsOfService() {
   return (
      <LayoutWrapper pageName="terms-of-service" pageTitle="Terms Of Service">
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">Terms Of Service</PageTitle>

            <ContentContainer>
               <ContentText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
                  temporibus facilis perferendis pariatur maxime veritatis
                  sapiente corporis officia quo voluptates ab? Reprehenderit
                  eius ipsum odio vero beatae ad nisi voluptas?
               </ContentText>

               <br />

               <ContentText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
                  temporibus facilis perferendis pariatur maxime veritatis
                  sapiente corporis officia quo voluptates ab? Reprehenderit
                  eius ipsum odio vero beatae ad nisi voluptas?
               </ContentText>

               <br />

               <ContentText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
                  temporibus facilis perferendis pariatur maxime veritatis
                  sapiente corporis officia quo voluptates ab? Reprehenderit
                  eius ipsum odio vero beatae ad nisi voluptas?
               </ContentText>

               <br />

               <ContentText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
                  temporibus facilis perferendis pariatur maxime veritatis
                  sapiente corporis officia quo voluptates ab? Reprehenderit
                  eius ipsum odio vero beatae ad nisi voluptas?
               </ContentText>

               <br />

               <ContentText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
                  temporibus facilis perferendis pariatur maxime veritatis
                  sapiente corporis officia quo voluptates ab? Reprehenderit
                  eius ipsum odio vero beatae ad nisi voluptas?
               </ContentText>
            </ContentContainer>
         </PageContainer>
      </LayoutWrapper>
   );
}
