import Box from '@material-ui/core/Box';
import Mission from './components/Mission';
import Vision from './components/Vision';
import FAQ from './components/FAQ';

export default function FeatureTwo() {
   return (
      <Box paddingX={2} paddingY={6}>
         <Mission />
         <Vision />
         <FAQ />
      </Box>
   );
}
