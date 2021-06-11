import PieChart from 'components/charts/PieChart';

export default function FeatureTwo() {
   return (
      <PieChart
         title="Content"
         height={480}
         labels={['Borrow', 'Return', 'Penalty', 'System']}
         values={[5, 3, 4, 3]}
      />
   );
}
