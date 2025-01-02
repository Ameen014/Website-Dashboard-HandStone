import { fetchSellers } from "../../../lib/data";
import AddPurchaseForm from "../../../ui/dashboard/addPurchaseForm";

export default async function Page () {

const sellers = await fetchSellers();

    return(
        <div className="p-8 m-4 flex flex-col items-center justify-center bg-[#f1f1f1] rounded-[14px]">
            <label htmlFor="lira" className="block text-[22px] font-medium text-gray-700 py-2">
                    إضافة فاتورة شراء جديدة
            </label>
            <AddPurchaseForm sellers={sellers} />
        </div>
    );
};