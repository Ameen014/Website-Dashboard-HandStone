import Table from "../../ui/dashboard/sizesTable";
import { Suspense } from "react";
import Loading from "../../ui/dashboard/loading/loadingTable";

export default async function Page () {
   
   return(
        <div className="py-8 px-8">
            <label htmlFor="lira" className="block text-[24px] font-bold text-center text-gray-700 pb-6">
                القياسات
            </label>
            <div className="w-full overflow-x-auto">
                <Suspense fallback = {<Loading />}>
                    <Table />
                </Suspense>
            </div>
        </div>
    );
};