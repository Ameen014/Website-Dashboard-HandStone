"use client";

import toast from "react-hot-toast";
import { addBuyer } from "../../lib/actions";

export default function AddBuyer (){

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        const formData = new FormData(e.currentTarget);

        const result = await addBuyer(formData); 

        if(result.status === true)
            toast.success(`${result.message}`)
        else
            toast.error(`${result.message}`)
    };

    return(<>
            <form onSubmit={handleSubmit}>
                <div className="sm:col-span-4 ">
                    <label className="block text-[16px] font-medium text-gray-900"> الاسم</label>
                    <div className="mt-2">
                        <input type="text" name="name" id="name"  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                </div>

                <div className="sm:col-span-4 mt-3">
                    <label className="block text-[16px] font-medium text-gray-900">مدين</label>
                    <div className="mt-2">
                        <input type="number" name="debtor" id="debtor" defaultValue={0} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
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