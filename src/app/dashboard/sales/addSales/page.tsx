import { fetchBuyers } from "../../../lib/data";
import AddSalesForm from "../../../ui/dashboard/addSalesForm";

export default async function Page () {

    const buyers = await fetchBuyers();

    return(
        <div className="p-8 m-4 flex flex-col items-center justify-center bg-[#f1f1f1] rounded-[14px]">
            <label htmlFor="lira" className="block text-[22px] font-medium text-gray-700 py-2">
                    إضافة فاتورة مبيع جديدة
            </label>
            <AddSalesForm buyers={buyers} />
        </div>
    );
};