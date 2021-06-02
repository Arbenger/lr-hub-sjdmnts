import { Paper } from "@material-ui/core";
import { getAllHex } from "components/layouts/ThemeSetter/utils";
import ReactFrappeChart from "react-frappe-charts";

export default function FeatureTwo() {
  return (
    <Paper>
      <ReactFrappeChart
        type="pie"
        height={500}
        title="Content"
        colors={getAllHex()}
        data={{
          labels: ["Science", "Math", "English", "History", "Filipino"],
          datasets: [
            {
              name: "Content",
              values: [5, 3, 5, 2, 6],
            },
          ],
        }}
      />
    </Paper>
  );
}
