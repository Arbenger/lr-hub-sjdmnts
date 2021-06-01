import { Paper } from "@material-ui/core";
import ReactFrappeChart from "react-frappe-charts";

export default function Chart() {
  return (
    <Paper>
      <ReactFrappeChart
        type="pie"
        height={480}
        colors={["#b71c1c", "#0d47a1", "#6a1b9a"]}
        title="Content"
        data={{
          labels: ["Barrow", "Return", "Penalty"],
          datasets: [
            {
              name: "Content",
              values: [5, 3, 5],
            },
          ],
        }}
      />
    </Paper>
  );
}
