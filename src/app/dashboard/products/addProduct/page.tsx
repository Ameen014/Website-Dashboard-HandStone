import { fetchCategories, fetchSizes } from "../../../lib/data";
import AddProductForm from "../../../ui/dashboard/addProductForm";

export default async function Page () {

    const categories = await fetchCategories();
    const sizes = await fetchSizes();

    return(
        <div className="p-8 m-4 flex flex-col items-center justify-center bg-[#f1f1f1] rounded-[14px]">
            <label htmlFor="lira" className="block text-[22px] font-medium text-gray-700 py-2">
                 إضافة منتج جديد
            </label>
            <AddProductForm categories = {categories} sizes = {sizes} />
        </div>
    );
};