import Table from "../../ui/dashboard/seller-buyer-Table";
import Search from "../../ui/dashboard/search/sellersBuyersSearch";
import { Suspense } from "react";
import Loading from "../../ui/dashboard/loading/loadingTable";

export default async function Page (props: { searchParams?: Promise<{ name?: string }> }) {
   
    const searchParams = await props.searchParams;
    const name = searchParams.name;
   
   return(
        <div className="py-8 px-8">
            <label htmlFor="lira" className="block text-[24px] font-bold text-center text-gray-700 pb-6">
                الموردون
            </label>
            <div className="pt-1 pb-6">
                <Search />
            </div>
            <Suspense fallback = {<Loading />}>
                <Table name = {name} />
            </Suspense>
        </div>
    );
};