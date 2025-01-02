
import React from 'react';
import { Bar , Donut } from '../../../ui/dashboard/statistics/statistics';
import { fetchStatisticsExpenses } from "../../../lib/data";
import Search from '../../../ui/dashboard/search/statisticsSearch';

export default async  function Page(props : {searchParams? : Promise<{ month? : number }> }) {

    const searchParams = await props.searchParams;
    const month = searchParams.month || null;

    const data = await fetchStatisticsExpenses(month);


  return (
    <div className='pt-8'>
        <label htmlFor="lira" className="block text-[24px] font-bold text-center text-gray-700">
            إحصائيات المصاريف الدورية
        </label>
        <div className='py-6 px-8'>
            <label htmlFor="lira" className="block text-[21px] font-bold text-gray-700 pb-6">
                الأشهر : 
            </label>
            <Search />
        </div>
        <div>
            <Donut data={data} /> 
        </div>
        <div>
            <Bar data={data} />
        </div>
    </div>
  );
}
