import { Fragment } from "react";
import { ImageCarouselCurve } from "components/pages/Home/FeatureOne/components/ImageCarousel/styled";
import ImageCarousel from "components/pages/Home/FeatureOne/components/ImageCarousel";

export default function FeatureOne() {
  return (
    <Fragment>
      <ImageCarousel />
      <ImageCarouselCurve />
    </Fragment>
  );
}
