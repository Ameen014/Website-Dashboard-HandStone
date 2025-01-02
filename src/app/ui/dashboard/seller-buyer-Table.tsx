"use client";

import React from "react";
import { usePathname } from "next/navigation"
import { fetchBuyers, fetchSellers } from "../../lib/data";

export default function Table ({name}) {

  const path = usePathname();

  const fetchData = async () => {
    if (path === "/dashboard/sellers") {
      return await fetchSellers(name);
    } else {
      return await fetchBuyers(name);
    }
  };
  
  const items = React.use(fetchData());

    return (
      <table className="w-full border-collapse text-center bg-white shadow-md rounded-lg">
        <thead className="bg-[#14213D] text-white">
          <tr>
            <th className=" px-4 py-2"> المعرف</th>
            <th className=" px-3 py-2">الإسم</th>
            <th className=" px-3 py-2">{path === "/dashboard/sellers" ? "دائن" : "مدين"}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-3 py-2">{path === "/dashboard/sellers" ? item.creditor.toLocaleString() : item.debtor.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}