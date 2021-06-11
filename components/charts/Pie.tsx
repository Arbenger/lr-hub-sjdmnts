import {
   Chart,
   PieSeries,
   Tooltip,
   Title,
   Legend,
} from '@devexpress/dx-react-chart-material-ui';
import {
   Animation,
   EventTracker,
   HoverState,
} from '@devexpress/dx-react-chart';
import { Box, Paper } from '@material-ui/core';

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

export default function Pie({
   title,
   height,
   data,
   valueField,
   argumentField,
}: Props) {
   return (
      <Paper>
         <Box padding={2}>
            <Chart data={data} height={height}>
               <PieSeries
                  valueField={valueField}
                  argumentField={argumentField}
               />
               <Title text={title} textComponent={TitleText} />
               <Legend />
               <EventTracker />
               <Tooltip />
               <HoverState />
               <Animation />
            </Chart>
         </Box>
      </Paper>
   );
}
