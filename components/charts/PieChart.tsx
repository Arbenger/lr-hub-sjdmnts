import { Paper } from "@material-ui/core";
import { getAllHex } from "components/layouts/ThemeSetter/utils";
import dynamic from "next/dynamic";
const ReactFrappeChart = dynamic(() => import("react-frappe-charts"), {
  ssr: false,
});

interface Props {
  title: string;
  height: number;
  labels: string[];
  values: number[];
}

export default function PieChart({ title, height, labels, values }: Props) {
  return (
    <Paper>
      <ReactFrappeChart
        title={title}
        type="pie"
        height={height}
        colors={getAllHex()}
        data={{
          labels,
          datasets: [{ name: title, values }],
        }}
      />
    </Paper>
  );
}
