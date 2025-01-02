import AddSeller from "../../../ui/dashboard/addSellerForm"

export default function Page () {

    return(
        <div className="p-8 m-4 flex flex-col items-center justify-center bg-[#f1f1f1] rounded-[14px]">
            <label htmlFor="lira" className="block text-[22px] font-medium text-gray-700 py-2">
                    إضافة مورّد جديد
            </label>
            <AddSeller />
        </div>
    )
}