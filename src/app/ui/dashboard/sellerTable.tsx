import React from "react";
import { fetchSellers } from "../../lib/data";

export default async function Table ({name}) {

 const items = await fetchSellers(name);


    return (
      <table className="w-full border-collapse text-center bg-white shadow-md rounded-lg">
        <thead className="bg-[#14213D] text-white">
          <tr>
            <th className=" px-4 py-2"> المعرف</th>
            <th className=" px-3 py-2">الإسم</th>
            <th className=" px-3 py-2">دائن</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-3 py-2">{item.creditor.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}