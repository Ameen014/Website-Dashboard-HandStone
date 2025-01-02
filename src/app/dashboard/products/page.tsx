import { Suspense } from "react";
import Table from "../../ui/dashboard/productsTable";
import Search from "../../ui/search";
import Loading from "../../ui/dashboard/loading/loadingTable";

export default async function Page(props: { searchParams?: Promise<{ keywords?: string , categoryId?: number }> }) {

    const searchParams = await props.searchParams;
    const categoryId = searchParams.categoryId || null;
    const keywords = searchParams.keywords || "";
   
   return(
        <div className="py-8 px-8 ">
             <label htmlFor="lira" className="block text-[25px] font-bold text-center text-gray-700 pb-6">
                    جدول المنتجات 
            </label>
            <div className="flex flex-col md:flex-row items-start gap-4 p-4">
                <Search />
            </div>
            <div className="w-full overflow-x-auto mt-6">
                <Suspense fallback = {<Loading />}>
                    <Table keywords = {keywords} categoryId = {categoryId} />
                </Suspense>
            </div>
        </div>
    );
};