import LayoutWrapper from 'components/wrappers/LayoutWrapper';
import FeatureOne from './components/FeatureOne';
import FeatureTwo from './components/FeatureTwo';

export default function Home() {
   return (
      <LayoutWrapper pageName="home" pageTitle="Home">
         <FeatureOne />
         <FeatureTwo />
      </LayoutWrapper>
   );
}
