import Navbar from '@/components/navbar';
import { LineChart } from '@tremor/react';


export default async function Home() {
  return (
    <>
      <Navbar />
      <h2 className='text-start p-2 text-2xl font-bold py-4 bg-gray-100 text-black'> 
        LineChart Visualization

      </h2>

      <LineChartHero />
    </>
  );
}




const chartdata = [
  {
    date: 'Jan 22',
    SemiAnalysis: 2890,
    'The Pragmatic Engineer': 2338,
  },
  {
    date: 'Feb 22',
    SemiAnalysis: 2756,
    'The Pragmatic Engineer': 2103,
  },
  {
    date: 'Mar 22',
    SemiAnalysis: 3322,
    'The Pragmatic Engineer': 2194,
  },
  {
    date: 'Apr 22',
    SemiAnalysis: 3470,
    'The Pragmatic Engineer': 2108,
  },
  {
    date: 'May 22',
    SemiAnalysis: 3475,
    'The Pragmatic Engineer': 1812,
  },
  {
    date: 'Jun 22',
    SemiAnalysis: 3129,
    'The Pragmatic Engineer': 1726,
  },
  {
    date: 'Jul 22',
    SemiAnalysis: 3490,
    'The Pragmatic Engineer': 1982,
  },
  {
    date: 'Aug 22',
    SemiAnalysis: 2903,
    'The Pragmatic Engineer': 2012,
  },
  {
    date: 'Sep 22',
    SemiAnalysis: 2643,
    'The Pragmatic Engineer': 2342,
  },
  {
    date: 'Oct 22',
    SemiAnalysis: 2837,
    'The Pragmatic Engineer': 2473,
  },
  {
    date: 'Nov 22',
    SemiAnalysis: 2954,
    'The Pragmatic Engineer': 3848,
  },
  {
    date: 'Dec 22',
    SemiAnalysis: 3239,
    'The Pragmatic Engineer': 3736,
  },
];

export const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;


export async function LineChartHero() {
  return (
    
    <div className="flex justify-center items-center bg-gray-100 h-1/2 text-black">
      <LineChart
        className="h-80 w-full max-w-6xl p-8 bg-white rounded-xl shadow-md"
        data={chartdata}
        index="date"
        categories={['SemiAnalysis', 'The Pragmatic Engineer']}
        colors={['indigo', 'rose']}
        // valueFormatter={dataFormatter}
        yAxisWidth={60}
        // onValueChange={(v) => console.log(v)}
      />
    </div>
  );
}



