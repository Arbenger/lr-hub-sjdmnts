import { StatisticsContainer, RootContainer } from "./styled";
import Statistics from "./Statistics";

export default function FeatureTwo() {
  return (
    <RootContainer maxWidth="lg">
      <StatisticsContainer>
        <Statistics />
      </StatisticsContainer>
    </RootContainer>
  );
}
