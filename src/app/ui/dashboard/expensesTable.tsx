import { fetchExpensesInvoice } from "../../lib/data";

export default async function Table ({type , time}) {

  const items = await fetchExpensesInvoice(type , time);

    return (
      <table className="w-full border-collapse text-center bg-white shadow-md rounded-lg">
        <thead className="bg-[#14213D] text-white">
          <tr>
            <th className=" px-4 py-2"> المعرف</th>
            <th className=" px-3 py-2">النوع</th>
            <th className=" px-3 py-2">إلى</th>
            <th className=" px-3 py-2">المجموع</th>
            <th className=" px-3 py-2">الوقت</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.type}</td>
              <td className="border border-gray-300 px-4 py-2">{item.for == null ? "-" : item.for}</td>
              <td className="border border-gray-300 px-4 py-2">{item.total.toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{item.createdat.toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}