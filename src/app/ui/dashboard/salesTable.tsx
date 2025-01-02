import React from "react";
import { fetchSalesInvoice } from "../../lib/data";

export default async function Table ({person , time}) {

  const items = await fetchSalesInvoice(person , time);

    return (
      <table className="w-full border-collapse text-center bg-white shadow-md rounded-lg">
        <thead className="bg-[#14213D] text-white">
          <tr>
            <th className=" px-4 py-2"> المعرف</th>
            <th className=" px-3 py-2">المنتجات</th>
            <th className=" px-3 py-2">السعر الإجمالي</th>
            <th className=" px-3 py-2">المدفوع</th>
            <th className=" px-3 py-2">الباقي</th>
            <th className=" px-3 py-2">الحالة</th>
            <th className=" px-3 py-2">الوقت</th>
            <th className=" px-3 py-2">المشتري</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className={`hover:bg-gray-50 ${item.status == true ? "bg-[#4C9F4B]" : "bg-[#FF3D3D]"}`}>
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.products}</td>
              <td className="border border-gray-300 px-4 py-2">{item.total.toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{item.paid.toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{item.rest.toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{item.status == true ? "سددت" : "لم تسدد"}</td>
              <td className="border border-gray-300 px-4 py-2">{item.createdat.toLocaleDateString()}</td>
              <td className="border border-gray-300 px-3 py-2">{item.buyersname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}