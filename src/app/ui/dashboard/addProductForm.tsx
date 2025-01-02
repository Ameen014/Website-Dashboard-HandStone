"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { addProducts } from "../../lib/actions";
import { uploadToCloudinary } from "../../lib/actions";

export default function AddProductForm ({categories , sizes}){

    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setFile(e.target.files[0]);
      }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        setLoading(true);
        
        const reader = new FileReader();
        reader.readAsDataURL(file);

        const formData = new FormData(e.currentTarget);

        reader.onload = async () => {
          const file = reader.result;
          const url = await  uploadToCloudinary(file as string);

        if(url){
          
          formData.append("photo" , url);
          
          const result = await addProducts(formData); 
  
          if(result.status === true){
              toast.success(`${result.message}`);
              setLoading(false);
          }
          else{
              toast.error(`${result.message}`);
              setLoading(false);
          }
        };
        }
    };

    return(<>
            <form onSubmit={handleSubmit}>
                <div className="sm:col-span-4 mt-3">
                    <label className="block text-[16px] font-medium text-gray-900"> الإسم</label>
                    <div className="mt-2">
                        <input type="text" name="name" id="name" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                </div>
                <div className="sm:col-span-4 mt-3">
                    <label htmlFor="type" className="mb-2 block text-sm font-medium">
                        اختار النوع
                    </label>
                    <select
                        id="categoryId"
                        name="categoryId"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-1 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        required
                        >
                        <option value="" disabled>
                            اختار النوع    
                        </option>
                        {categories.map((category) => (
                            <option key={category.id}  value={category.id} >
                            {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="sm:col-span-4 mt-3">
                    <label htmlFor="type" className="mb-2 block text-sm font-medium">
                        اختار المقاس
                    </label>
                    <select
                        id="sizeId"
                        name="sizeId"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-1 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        required
                        >
                        <option value="" disabled>
                            اختار المقاس    
                        </option>
                        {sizes.map((size) => (
                            <option key={size.id}  value={size.id} >
                            {size.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="sm:col-span-4 mt-3">
                    <label htmlFor="type" className="mb-2 block text-[16px] font-medium">
                        جديد
                    </label>
                    <input
                        type="radio"
                        id="isNew"
                        name="isNew"
                        value="1"
                        className="h-5 w-5 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    />
                </div>
                <div className="sm:col-span-4 mt-3">
                    <label htmlFor="type" className="mb-2 block text-[16px] font-medium">
                         رفع صورة
                    </label>
                    <input type="file" required accept="image/*" onChange={handleFileChange} />
                </div>
                <div className="flex justify-center mt-8">  
                    <button  
                        type="submit"  
                        className="w-[200px] px-4 py-2 text-white bg-[#14213D] rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:ring-offset-2">  
                        {loading ? "جاري التحميل" : "تأكيد العملية"}  
                    </button>  
                </div>  
            </form>
    </>)
}