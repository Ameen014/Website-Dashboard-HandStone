"use client";

import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { addSettlingSellerAccount , addSettlingBuyerAccount} from "../../lib/actions";

export default function AddSettlingAccountForm ({placeholder , data}){

    const path = usePathname(); 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        const formData = new FormData(e.currentTarget);

        if(path == '/dashboard/sellers/settlingAnAccount'){

            const result = await addSettlingSellerAccount(formData); 

            if(result.status === true){
                toast.success(`${result.message}`)
            }
            else
                toast.error(`${result.message}`)
        }
        else{
            const result = await addSettlingBuyerAccount(formData); 

            if(result.status === true){
                toast.success(`${result.message}`)
            }
            else
                toast.error(`${result.message}`)
        }
    };

    return(<>
            <form onSubmit={handleSubmit}>
                <div className="sm:col-span-4 mt-3">
                    <label htmlFor="seller" className="mb-2 block text-sm font-medium">
                        إختر {placeholder}
                    </label>
                    <div className="relative">
                        <select
                        id="id"
                        name="id"
                        required
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue=""
                        >
                        <option value="" disabled>
                            إختر {placeholder}    
                        </option>
                        {data.map((user) => (
                            <option key={user.id} value={user.id}>
                            {user.name}
                            </option>
                        ))}
                        </select>
                        <FaUserCircle className="pointer-events-none absolute left-5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                <div className="sm:col-span-4 mt-3">
                    <label className="block text-[16px] font-medium text-gray-900">المبلغ المسدد</label>
                    <div className="mt-2">
                        <input type="number" name="total" id="total" defaultValue={0} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-[200px] mt-4 px-4 py-2 text-white bg-[#14213D] rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                    تأكيد العملية
                </button>
            </form>
    </>);
};