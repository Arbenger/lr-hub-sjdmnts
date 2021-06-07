import { Paper, useTheme } from "@material-ui/core";
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

export default function OneLineChart({ title, height, labels, values }: Props) {
  const { palette } = useTheme();

  return (
    <Paper>
      <ReactFrappeChart
        type="line"
        title={title}
        height={height}
        colors={[palette.primary.main]}
        data={{ labels, datasets: [{ name: title, values }] }}
        lineOptions={{ heatline: 1, regionFill: 1 }}
      />
    </Paper>
  );
}
