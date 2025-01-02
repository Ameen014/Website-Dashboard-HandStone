import Exchange from "../../ui/dashboard/exchange"
import { fetchExchange } from "../../lib/data"

export default async function page () {

    const fetchExchanges  = await fetchExchange();

    return(
        <div className="p-8 m-4 flex flex-col items-center justify-center bg-[#f1f1f1] rounded-[14px]">
            <label htmlFor="lira" className="block text-[22px] font-medium text-gray-700">
                    الليرة مقابل الدولار الأمريكي
            </label>
            <Exchange fetchExchanges = {fetchExchanges} />
        </div>
    );
};