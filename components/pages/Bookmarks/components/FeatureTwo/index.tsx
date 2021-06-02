import { Paper, useTheme } from "@material-ui/core";
import { getMonthLabels } from "utils";
import ReactFrappeChart from "react-frappe-charts";

export default function FeatureTwo() {
  const { appPalette } = useTheme();

  return (
    <Paper>
      <ReactFrappeChart
        type="line"
        height={350}
        title="Statistics"
        colors={[appPalette[appPalette.current].main]}
        data={{
          labels: getMonthLabels(),
          datasets: [
            {
              name: "Statistics",
              values: [5, 3, 5, 2, 6, 5, 4, 8, 9, 2, 0, 2],
            },
          ],
        }}
        axisOptions={{ xIsSeries: 1 }}
        lineOptions={{ heatline: 1 }}
      />
    </Paper>
  );
}
