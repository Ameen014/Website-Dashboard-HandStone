import AddSettlingAccountForm from "../../../ui/dashboard/addsettlingAccountForm"
import { fetchSellers } from "../../../lib/data"

export default async function Page () {

    const seller = await fetchSellers();

    return(
        <div className="p-8 m-4 flex flex-col items-center justify-center bg-[#f1f1f1] rounded-[14px]">
            <label htmlFor="lira" className="block text-[22px] font-medium text-gray-700 py-2">
                    تسديد حساب مورّد
            </label>
            <AddSettlingAccountForm placeholder={"البائع"} data = {seller} />
        </div>
    );
};