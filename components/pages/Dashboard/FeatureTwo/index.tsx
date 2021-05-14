import { LineChartContainer, RootContainer } from "./styled";
import LineChart from "./LineChart";

export default function FeatureTwo() {
  return (
    <RootContainer maxWidth="lg">
      <LineChartContainer>
        <LineChart />
      </LineChartContainer>
    </RootContainer>
  );
}
