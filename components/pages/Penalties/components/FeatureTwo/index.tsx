import { getMonthLabels } from 'utils';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Line = dynamic(() => import('components/charts/Line'), { ssr: false });

export default function FeatureTwo() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const labels = getMonthLabels();
      const data = labels.map((label) => ({
         key: label,
         value: Math.round(Math.random() * 10),
      }));
      setData(data);
   }, []);

   return (
      <Line
         data={data}
         height={400}
         title="Statistics"
         valueField="value"
         argumentField="key"
      />
   );
}
