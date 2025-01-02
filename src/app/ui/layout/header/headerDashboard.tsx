import { useState } from 'react';
import { useRouter , usePathname } from 'next/navigation';
import { dashboard , invoice , buyers , sellers , expenses } from '../../../lib/placeholder-data';
export default function HeaderDashboard() {
    const path = usePathname();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('');
    
    const handleTabClick = (id) => {
        setActiveTab(id);
        router.push(id);
    };

    return (<>
            <h1 className='text-[22px] font-bold text-gray-600 text-center py-4'>لوحة التحكم</h1>
            <div className="flex flex-col gap-4 justify-center md:flex-row">
                {dashboard.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        style={{
                            backgroundColor: activeTab === tab.id ? tab.color : tab.color,
                            border : path === tab.id ? "2px solid #14b97a" : "",
                        }}
                        className={`w-full md:w-1/8 py-3 rounded-lg shadow-lg font-bold text-white`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <h1 className='text-[22px] font-bold text-gray-600 text-center py-8'> الفواتير</h1>
            <div className="flex flex-col gap-4 justify-center md:flex-row">
                {invoice.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        style={{
                            backgroundColor: activeTab === tab.id ? tab.color : tab.color,
                            border : path === tab.id ? "2px solid #14b97a" : "",
                        }}
                        className={`w-full md:w-1/8 py-3 rounded-lg shadow-lg font-bold text-white`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <h1 className='text-[22px] font-bold text-gray-600 text-center py-8'> المصاريف الدورية</h1>
            <div className="flex flex-col gap-4 justify-center md:flex-row">
                {expenses.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        style={{
                            backgroundColor: activeTab === tab.id ? tab.color : tab.color,
                            border : path === tab.id ? "2px solid #14b97a" : "",
                        }}
                        className={`w-full md:w-1/8 py-3 rounded-lg shadow-lg font-bold text-white`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <h1 className='text-[22px] font-bold text-gray-600 text-center py-8'> الزبائن</h1>
            <div className="flex flex-col gap-4 justify-center md:flex-row">
                {buyers.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        style={{
                            backgroundColor: activeTab === tab.id ? tab.color : tab.color,
                            border : path === tab.id ? "2px solid #14b97a" : "",
                        }}
                        className={`w-full md:w-1/8 py-3 rounded-lg shadow-lg font-bold text-white`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <h1 className='text-[22px] font-bold text-gray-600 text-center py-8'> الموردون</h1>
            <div className="flex flex-col gap-4 justify-center md:flex-row">
                {sellers.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        style={{
                            backgroundColor: activeTab === tab.id ? tab.color : tab.color,
                            border : path === tab.id ? "2px solid #14b97a" : "",
                        }}
                        className={`w-full md:w-1/8 py-3 rounded-lg shadow-lg font-bold text-white`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            </>);
}
