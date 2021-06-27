import {
   WaveBackground,
   PageContainer,
   PageTitle,
} from 'components/layouts/Page/styled';
import { ContentContainer, ContentText } from './styled';
import LayoutWrapper from 'components/wrappers/LayoutWrapper';

export default function References() {
   return (
      <LayoutWrapper pageName="references" pageTitle="References">
         <WaveBackground />
         <PageContainer maxWidth="lg">
            <PageTitle variant="h4">References</PageTitle>

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
