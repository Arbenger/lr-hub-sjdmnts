import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import { RootContainer, Curve, FeatureTwoCurve } from "./styled";

export default function Footer() {
  return (
    <RootContainer>
      <Curve />
      <FeatureOne />
      <FeatureTwoCurve />
      <FeatureTwo />
    </RootContainer>
  );
}
