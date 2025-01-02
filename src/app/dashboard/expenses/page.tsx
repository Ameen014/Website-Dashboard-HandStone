import Table from "../../ui/dashboard/expensesTable";
import Search from "../../ui/dashboard/search/expensesSearch";
import { Suspense } from "react";
import Loading from "../../ui/dashboard/loading/loadingTable";

export default async function Page (props: { searchParams?: Promise<{ type?: string , time?: string }> }) {

    const searchParams = await props.searchParams;
    const type = searchParams.type || "";
    const time = searchParams.time;
   
   return(
        <div className="py-8 px-8 ">
             <label htmlFor="lira" className="block text-[24px] font-bold text-center text-gray-700 pb-6">
                    فواتير المصاريف اليومية 
            </label>
            <div className="pt-1 pb-6">
                <Search />
            </div>
            <div className="w-full overflow-x-auto">
                <Suspense fallback = {<Loading />}>
                    <Table type = {type} time = {time} />
                </Suspense>
            </div>
        </div>
    );
};