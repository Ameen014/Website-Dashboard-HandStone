"use client"

import React from 'react';  
import floors from "../../../../public/floors.png";
import walls from "../../../../public/walls.png";
import pillars from "../../../../public/pillars.png";
import materials from "../../../../public/materials.png";
import paint from "../../../../public/paint.png";
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams , useRouter } from 'next/navigation';

const categories = [  
    { name: 'أرضيات', icon: floors  , id : 5 },  // Wood or flooring  
    { name: 'جداريات', icon: walls , id : 1  }, // Framed picture for murals  
    { name: 'أعمدة', icon: pillars , id : 2  },   // Classical building for columns  
    { name: 'مواد بناء', icon: materials , id :3  }, // Hammer for construction materials  
    { name: 'أصبغة', icon: paint , id : 4 },    // Palette for paints  
];

const HomeCategorySetion = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const handleSearch = (categoryId : any) => {
        const params = new URLSearchParams(Array.from(searchParams.entries())); // Convert to array  
        if(categoryId){
            params.set("categoryId", categoryId);
        }
        else
            params.delete('categoryId');

        router.push(`/products?${params.toString()}`);
    };

    return (  
        <div className="my-[10px] mx-[20px] p-4">  
            <div className='flex flex-col justify-around items-center md:flex-row'>  
                {categories.map((category, index) => (  
                    <div onClick={()=>{handleSearch(category.id)}}>
                        <div key={index} className="w-full mx-5 my-5 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => <Link href={`/products?categoryId=${category.id}`}></Link>}> 
                            <div className="text-[48px] mb-2">
                                <Image src={category.icon} alt='category' className='max-w-[65px]' />
                            </div>  
                            <h3>{category.name}</h3>
                        </div>  
                    </div>
                ))}  
            </div>  
        </div>  
    );  
};  

export default HomeCategorySetion;