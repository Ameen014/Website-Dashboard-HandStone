import Table from "../../ui/dashboard/sales-purchase-table";
import { fetchSellers } from "../../lib/data"
import Search from "../../ui/dashboard/search/purchasesSalesSearch";
import { Suspense } from "react";
import Loading from "../../ui/dashboard/loading/loadingTable";

export default async function Page (props: { searchParams?: Promise<{ seller?: string , time?: string }> }) {

    const searchParams = await props.searchParams;
    const seller = searchParams.seller || "";
    const time = searchParams.time;

    const data = await fetchSellers();

   return(
        <div className="py-8 px-8 ">
             <label htmlFor="lira" className="block text-[24px] font-bold text-center text-gray-700 pb-6">
                    فواتير الشراء
            </label>
            <div className="pt-1 pb-6">
                <Search data = {data} placeholder={"البائع / المورد"} />
            </div>
            <div className="w-full overflow-x-auto">
                <Suspense fallback = {<Loading />}>
                    <Table person = {seller} time = {time} />
                </Suspense>
            </div>
        </div>
    );
};