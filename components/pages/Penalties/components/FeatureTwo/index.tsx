import { getMonthLabels } from 'utils';
import OneLineChart from 'components/charts/OneLineChart';

export default function FeatureTwo() {
   return (
      <OneLineChart
         title="Statistics"
         height={350}
         labels={getMonthLabels()}
         values={[0, 2, 0, 1, 2, 3, 4, 2, 3, 2, 4, 5]}
      />
   );
}
