"use client";

import toast from "react-hot-toast";
import { addSales } from "../../lib/actions";
import { FaUserCircle } from "react-icons/fa";

export default function AddSalesForm ({buyers}){

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        const formData = new FormData(e.currentTarget);

        const total = Number(formData.get("total")); 
        const paid = Number(formData.get("paid")); 
        const rest = Number(formData.get("rest")); 

        if(total == paid){
            formData.append("status" , "TRUE");
        }
        else{
            formData.append("status" , "FALSE");
        }

        if(total != (paid + rest)){
            return toast.error("يرجى التأكد من أن المجموع = المدفوع + الباقي")
        }

        const result = await addSales(formData); 

        if(result.status === true){
            toast.success(`${result.message}`)
        }
        else
            toast.error(`${result.message}`)
    };

    return(<>
            <form onSubmit={handleSubmit}>

                <div className="sm:col-span-4 mt-3">
                    <label htmlFor="seller" className="mb-2 block text-sm font-medium">
                        اختار المشتري
                    </label>
                    <div className="relative">
                        <select
                        id="buyerid"
                        name="buyerid"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue=""
                        >
                        <option value="" disabled>
                            اختار المشتري    
                        </option>
                        {buyers.map((buyer) => (
                            <option key={buyer.id} value={buyer.id}>
                            {buyer.name}
                            </option>
                        ))}
                        </select>
                        <FaUserCircle className="pointer-events-none absolute left-5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
                <div className="sm:col-span-4 ">
                    <label className="block text-[16px] font-medium text-gray-900"> المنتجات</label>
                    <div className="mt-2">
                        <textarea name="products" id="products"  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                </div>

                <div className="sm:col-span-4 mt-3">
                    <label className="block text-[16px] font-medium text-gray-900">المجموع الكلي</label>
                    <div className="mt-2">
                        <input type="number" name="total" id="total" defaultValue={0} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                </div>

                <div className="sm:col-span-4 mt-3">
                    <label className="block text-[16px] font-medium text-gray-900"> المدفوع</label>
                    <div className="mt-2">
                        <input type="number" name="paid" id="paid" defaultValue={0} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                </div>

                <div className="sm:col-span-4 mt-3">
                    <label className="block text-[16px] font-medium text-gray-900"> الباقي</label>
                    <div className="mt-2">
                        <input type="number" name="rest" id="rest" defaultValue={0} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                </div>
                
                <button
                    type="submit"
                    className="w-[200px] mt-4 px-4 py-2 text-white bg-[#14213D] rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                    تأكيد العملية
                </button>
            </form>
    </>)
}