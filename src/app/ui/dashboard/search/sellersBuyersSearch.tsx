"use client"

import React from "react";
import { useDebouncedCallback } from 'use-debounce';
import { usePathname , useRouter , useSearchParams } from "next/navigation";

const Search = () => {  

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback( (term) => {
      const params = new URLSearchParams(Array.from(searchParams.entries())); // Convert to array  
      if (term) {
          params.set('name',term);
        }
        else
          params.delete('name');

        replace(`${pathname}?${params.toString()}`);

    },500);

    return (
        <div className="flex-1">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            إبحث عن طريق الإسم
          </label>
          <input
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder=" الإسم  . . ."
            className="w-full py-2 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          />
        </div>
    );
};
export default Search;