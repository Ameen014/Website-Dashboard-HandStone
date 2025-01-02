"use client";

import { updateSize } from "../../lib/actions";
import toast from "react-hot-toast";

export default  function UpdateSizeForm({data}) {

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault(); 

            const formData = new FormData(e.currentTarget);

            const result = await updateSize(formData); 

            if(result.status === true)
                toast.success(`${result.message}`)
            else
                toast.error(`${result.message}`)
        };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                id="price"
                name="price"
                min={0}
                step="0.01"
                defaultValue={data[0].price}
                className="my-4 mr-[50px] block w-[100px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
            />
            <input
                type="hidden"
                id="id"
                name="id"
                value={data[0].id}
                required
            />
            <button
                type="submit"
                className="w-[200px] mt-1 px-4 py-2 text-white bg-[#14213D] rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                تأكيد العملية
            </button>
        </form>
    );
};