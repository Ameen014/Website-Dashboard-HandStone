import Table from "../../ui/dashboard/salesTable";
import { fetchBuyers } from "../../lib/data"
import Search from "../../ui/dashboard/search/purchasesSalesSearch";
import { Suspense } from "react";
import Loading from "../../ui/dashboard/loading/loadingTable";

export default async function Page (props: { searchParams?: Promise<{ buyer?: string , time?: string }> }) {

    const searchParams = await props.searchParams;
    const buyer = searchParams.buyer || "";
    const time = searchParams.time;

    const data = await fetchBuyers();
   
   return(
        <div className="py-8 px-8 ">
             <label htmlFor="lira" className="block text-[24px] font-bold text-center text-gray-700 pb-6">
                    فواتير المبيع
            </label>
            <div className="pt-1 pb-6">
                <Search data = {data} placeholder = {"المشتري / الزبون"} />
            </div>
            <div className="w-full overflow-x-auto">
                <Suspense fallback = {<Loading />}>
                    <Table person = {buyer} time = {time} />
                </Suspense>
            </div>
        </div>
    );
};