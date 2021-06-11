import {
   Chart,
   LineSeries,
   Title,
   ArgumentAxis,
   ValueAxis,
   Tooltip,
   ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui';
import {
   Animation,
   EventTracker,
   HoverState,
   Palette,
} from '@devexpress/dx-react-chart';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core';

interface Props {
   data: any[];
   title: string;
   height: number;
   valueField: string;
   argumentField: string;
}

const TitleText = (props) => (
   <Title.Text {...props} style={{ marginBottom: 0 }} />
);

export default function Line({
   data,
   title,
   height,
   valueField,
   argumentField,
}: Props) {
   const theme = useTheme();

   return (
      <Paper>
         <Chart data={data} height={height}>
            <LineSeries valueField={valueField} argumentField={argumentField} />
            <Title text={title} textComponent={TitleText} />
            <ZoomAndPan />
            <ArgumentAxis />
            <ValueAxis />
            <EventTracker />
            <Tooltip />
            <HoverState />
            <Animation />
            <Palette scheme={[theme.palette.primary.main]} />
         </Chart>
      </Paper>
   );
}
