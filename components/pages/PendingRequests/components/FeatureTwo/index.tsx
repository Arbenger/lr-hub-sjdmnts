import dynamic from 'next/dynamic';

const Pie = dynamic(() => import('components/charts/Pie'), { ssr: false });

export default function FeatureTwo() {
   const data = [
      { key: 'Penaty', value: 10 },
      { key: 'Return', value: 5 },
      { key: 'Borrow', value: 15 },
      { key: 'Others', value: 2 },
   ];

   return (
      <Pie
         data={data}
         title="Contents"
         height={400}
         valueField="value"
         argumentField="key"
      />
   );
}
