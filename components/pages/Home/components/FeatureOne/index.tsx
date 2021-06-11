import { Fragment } from 'react';
import { ImageCarouselCurve } from './components/ImageCarousel/styled';
import ImageCarousel from './components/ImageCarousel';

export default function FeatureOne() {
   return (
      <Fragment>
         <ImageCarousel />
         <ImageCarouselCurve />
      </Fragment>
   );
}
