import { Container, ChartContainer } from "./styled";
import { getMonthLabels } from "utils";
import dynamic from "next/dynamic";
const ReactFrappeChart = dynamic(() => import("react-frappe-charts"), {
  ssr: false,
});

export default function FeatureTwo() {
  return (
    <Container>
      <ChartContainer>
        <ReactFrappeChart
          type="axis-mixed"
          height={400}
          colors={["#b71c1c", "#0d47a1", "#6a1b9a", "#2e7d32"]}
          title="Statistics"
          data={{
            labels: getMonthLabels(),
            datasets: [
              {
                name: "Barrowed",
                chartType: "line",
                values: [5, 3, 5, 6, 7, 3, 6, 8, 4, 3, 2, 2],
              },
              {
                name: "Returned",
                chartType: "line",
                values: [4, 2, 5, 8, 4, 6, 4, 9, 3, 4, 3, 2],
              },
              {
                name: "Expired",
                chartType: "bar",
                values: [2, 3, 2, 0, 5, 5, 1, 2, 0, 0, 1, 0],
              },
              {
                name: "Lost",
                chartType: "bar",
                values: [1, 2, 0, 0, 0, 5, 3, 0, 2, 0, 2, 0],
              },
            ],
          }}
          axisOptions={{ xIsSeries: 1 }}
          lineOptions={{ heatline: 1 }}
        />
      </ChartContainer>
    </Container>
  );
}
