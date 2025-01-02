"use client"

import React , { useState }from "react";
import { useDebouncedCallback } from 'use-debounce';
import { usePathname , useRouter , useSearchParams } from "next/navigation";


const Search = () => {  

    const [selectedCategory , setselectedCategory] = useState<number>(null);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    const categories = [
      { id: 1, name: "جداريات" },
      { id: 2, name: "أرضيات" },
      { id: 3, name: "أعمدة" },
      { id: 4, name: "مواد بناء" },
      { id: 5, name: "أصبغة" },
    ];

    const handleSearch = useDebouncedCallback( (term) => {
      const params = new URLSearchParams(Array.from(searchParams.entries())); // Convert to array  
      if (term) {
          params.set('keywords',term);
        }
        else
          params.delete('keywords');

        replace(`${pathname}?${params.toString()}`);

    },500);

    const handleCategory = (term : any) => {
        setselectedCategory(term);
        const params = new URLSearchParams(Array.from(searchParams.entries())); // Convert to array  
        if (term) {
          params.set('categoryId',term);
        }
        else
          params.delete('categoryId');

        replace(`${pathname}?${params.toString()}`);

    };

    return (
        <>
        <div className="flex-1">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
             اختر الفئة
          </label>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategory(category.id)}
                className={`py-2 px-4 rounded-lg border transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-800 border-gray-300"
                } hover:bg-blue-500 hover:text-white`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
  
        <div className="flex-1">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            ابحث عن القالب او المادة
          </label>
          <input
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="ابحث عن منتج..."
            className="w-full py-2 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          />
        </div>
        </>
    )

}
export default Search;