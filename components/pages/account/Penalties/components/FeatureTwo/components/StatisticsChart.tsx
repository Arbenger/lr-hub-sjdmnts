import { useAppSelector } from 'services/redux/hooks';
import { selectTheme } from 'services/redux/selectors';
import { useTheme } from '@material-ui/core';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import getMonths from 'utils/getMonths';

export default function StatisticsChart() {
   const { spacing } = useTheme();
   const { appPalette } = useAppSelector(selectTheme);

   const data: Chartist.IChartistData = {
      labels: getMonths(),
      series: [
         {
            className: `ct-series-_${appPalette.current}`,
            data: [10, 5, 3, 5, 4, 5, 6, 2, 0, 2, 3, 6],
         },
      ],
   };

   const options: Chartist.IBarChartOptions = {
      height: 450,
      axisY: {
         onlyInteger: true,
         offset: spacing(1),
      },
      axisX: {
         labelOffset: {
            x: spacing(-1.5),
         },
      },
   };

   return <ChartistGraph type="Bar" data={data} options={options} />;
}
