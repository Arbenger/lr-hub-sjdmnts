import { Paper, useTheme } from "@material-ui/core";
import { getMonthLabels } from "utils";
import ReactFrappeChart from "react-frappe-charts";

export default function FeatureTwo() {
  const { palette } = useTheme();

  return (
    <Paper>
      <ReactFrappeChart
        type="line"
        height={350}
        title="Statistics"
        colors={[palette.primary.main]}
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
