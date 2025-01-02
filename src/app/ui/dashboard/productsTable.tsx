"use client";

import { fetchProducts } from "../../lib/data";

export default async function Table ({keywords , categoryId}) {

  const items = await fetchProducts(keywords , categoryId);

    return (
      <table className="w-full border-collapse text-center bg-white shadow-md rounded-lg">
        <thead className="bg-[#14213D] text-white">
          <tr>
            <th className=" px-4 py-2"> المعرف</th>
            <th className=" px-3 py-2">الإسم</th>
            <th className=" px-3 py-2"> النوع</th>
            <th className=" px-3 py-2">القياس</th>
            <th className=" px-3 py-2">الوحدة</th>
            <th className=" px-3 py-2">السعر</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.categoryname}</td>
              <td className="border border-gray-300 px-4 py-2">{item.sizename}</td>
              <td className="border border-gray-300 px-4 py-2">{item.sizeunit}</td>
              <td className="border border-gray-300 px-4 py-2">{item.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}