import { fetchSizesById } from "../../../lib/data";
import UpdateSizeForm from "../../../ui/dashboard/updateSizeForm";
import { notFound } from "next/navigation";

export default async function Page (props: { params: Promise<{ id: number }> }) {

    const params = await props.params;
    const id = params.id;

    const sizes = await fetchSizesById(id);

    if(!sizes || sizes.length === 0){
        notFound();
    }

    return(
        <div className="p-8 m-4 flex flex-col items-center justify-center bg-[#f1f1f1] rounded-[14px]">
            <label htmlFor="lira" className="block text-[22px] font-medium text-gray-700 py-2">
                 تعديل سعر القياس / الوزن ل ({sizes[0].name})
            </label>
            <UpdateSizeForm data = {sizes} />
        </div>
    )
}