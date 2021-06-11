import dynamic from 'next/dynamic';

const Pie = dynamic(() => import('components/charts/Pie'), { ssr: false });

export default function FeatureTwo() {
   const data = [
      { key: 'Account', value: 10 },
      { key: 'Books', value: 5 },
      { key: 'System', value: 3 },
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
