import { Container } from './styled';
import Mission from './components/Mission';
import Vision from './components/Vision';
import FAQ from './components/FAQ';

export default function FeatureTwo() {
   return (
      <Container>
         <Mission />
         <Vision />
         <FAQ />
      </Container>
   );
}
