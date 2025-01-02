"use client"

import React from "react";
import { usePathname , useRouter , useSearchParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

const Search = ({data , placeholder}) => {  

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term : any) => {
        const params = new URLSearchParams(Array.from(searchParams.entries())); // Convert to array  
        if (term) {
          params.set('seller',term);
        }
        else
          params.delete('seller');

        replace(`${pathname}?${params.toString()}`);
    };

    const handleTime = (term: any) => {
        const params = new URLSearchParams(Array.from(searchParams.entries())); // Convert to array  
       const date =  term.split('T')[0];
       console.log(date)
        if (date) {
          params.set('time',date);
        }
        else
          params.delete('time');

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="flex-1">
                <label className="block text-lg font-semibold text-gray-800 mb-2">
                    إبحث عن طريق {placeholder}
                </label>
                <div className="relative">
                    <select
                        id="seller"
                        name="seller"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue=""
                        onChange={(e) => handleSearch(e.target.value)}
                        >
                        <option value="" disabled>
                            اختار البائع    
                        </option>
                        {data.map((sellers) => (
                            <option key={sellers.id} value={sellers.name}>
                            {sellers.name}
                            </option>
                        ))}
                    </select>
                    <FaUserCircle className="pointer-events-none absolute left-5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                </div>
            </div>
            <div className="flex-1">
                <label className="block text-lg font-semibold text-gray-800 mb-2">
                    إبحث عن طريق الوقت
                </label>
                <input 
                    type="date" 
                    id="search-time" 
                    className="block w-full p-[11px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Select date and time"
                    onChange={(e) => handleTime(e.target.value)}
                />
            </div>
        </div>
    );
};
export default Search;