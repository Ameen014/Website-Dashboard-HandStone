"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { addExpenses } from "../../lib/actions";
import { expensesType } from "../../lib/placeholder-data";

export default function AddExpensesForm (){

    const [showFor , setShowFor] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        const formData = new FormData(e.currentTarget);

        const result = await addExpenses(formData); 

        if(result.status === true)
            toast.success(`${result.message}`);
        else
            toast.error(`${result.message}`);
    };

    return(<>
            <form onSubmit={handleSubmit}>

                <div className="m:col-span-4 mt-3">
                    <label htmlFor="type" className="mb-2 block text-sm font-medium">
                        اختار النوع
                    </label>
                    <select
                        id="type"
                        name="type"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        onChange={(e) => setShowFor(e.target.value)}
                        required
                        >
                        <option value="" disabled>
                            اختار النوع    
                        </option>
                        {expensesType.map((type) => (
                            <option key={type.name}  value={type.name} >
                            {type.name}
                            </option>
                        ))}
                    </select>
                </div>
                {["صدقة", "رواتب", "مساعدة موظف" , "إجرة سيارة / نقل"].some(item => showFor.includes(item)) && (
                    <div className="sm:col-span-4 mt-3">
                        <label className="block text-[16px] font-medium text-gray-900"> إلى</label>
                        <div className="mt-2">
                            <input type="text" name="for" id="for" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                )}
                <div className="sm:col-span-4 mt-3">
                    <label className="block text-[16px] font-medium text-gray-900">المبلغ الكلي</label>
                    <div className="mt-2">
                        <input type="number" name="total" id="total" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
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