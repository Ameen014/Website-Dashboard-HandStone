import AddSettlingAccountForm from "../../../ui/dashboard/addsettlingAccountForm"
import { fetchBuyers } from "../../../lib/data"

export default async function Page () {

    const buyer = await fetchBuyers()

    return(
        <div className="p-8 m-4 flex flex-col items-center justify-center bg-[#f1f1f1] rounded-[14px]">
            <label htmlFor="lira" className="block text-[22px] font-medium text-gray-700 py-2">
                    تسديد حساب زبون
            </label>
            <AddSettlingAccountForm placeholder={"الزبون"} data = {buyer} />
        </div>
    )
}