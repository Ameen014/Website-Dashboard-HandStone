import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { fetchSizes } from "../../lib/data";

export default async function Table () {

  const items = await fetchSizes();

    return (
      <table className="w-full border-collapse text-center bg-white shadow-md rounded-lg">
        <thead className="bg-[#14213D] text-white">
          <tr>
            <th className=" px-4 py-2"> المعرف</th>
            <th className=" px-3 py-2">القياس / الوزن</th>
            <th className=" px-3 py-2"> الوحدة</th>
            <th className=" px-3 py-2">السعر  بالدولار  </th>
            <th className=" px-3 py-2">تعديل  </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 ">
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.unit}</td>
              <td className="border border-gray-300 px-4 py-2">{item.price}</td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center items-center">
                <Link href={`/dashboard/sizes/${item.id}`}>
                  <CiEdit className="text-[24px] hover:text-red-600"/>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}