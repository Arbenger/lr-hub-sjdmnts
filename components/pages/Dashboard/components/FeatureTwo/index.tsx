import {
   Chart,
   LineSeries,
   BarSeries,
   Title,
   Legend,
   ArgumentAxis,
   ValueAxis,
   Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import {
   Animation,
   EventTracker,
   HoverState,
} from '@devexpress/dx-react-chart';
import { getMonthLabels } from 'utils';
import { Paper, Box } from '@material-ui/core';

const TitleText = (props) => (
   <Title.Text {...props} style={{ marginBottom: 0 }} />
);

export default function Line() {
   const labels = getMonthLabels();
   const data = labels.map((label) => ({
      month: label,
      borrowed: Math.round(Math.random() * 10),
      returned: Math.round(Math.random() * 10),
      lost: Math.round(Math.random() * 10),
      expired: Math.round(Math.random() * 10),
   }));

   return (
      <Paper>
         <Box padding={2} overflow="auto">
            <Box minWidth={700}>
               <Chart data={data} height={400}>
                  <ArgumentAxis />
                  <ValueAxis />

                  <BarSeries
                     name="Book Lost"
                     valueField="lost"
                     argumentField="month"
                  />
                  <BarSeries
                     name="Book Expired"
                     valueField="expired"
                     argumentField="month"
                  />
                  <LineSeries
                     name="Book Borrowed"
                     valueField="borrowed"
                     argumentField="month"
                  />
                  <LineSeries
                     name="Book Returned"
                     valueField="returned"
                     argumentField="month"
                  />

                  <Title text="Statistics" textComponent={TitleText} />
                  <Legend />

                  <EventTracker />
                  <Tooltip />
                  <HoverState />
                  <Animation />
               </Chart>
            </Box>
         </Box>
      </Paper>
   );
}
