"use client";

import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const OrderDetails = ({cartItems}) => {

    const router = useRouter();

    if(cartItems.length === 0){
        toast.success('السلة فارغة , قم ب اضافة بعض المنتجات لشرائها');
        router.push('/products');
    }

    return(
    <>
        <table className="w-full border-collapse text-center bg-white shadow-md rounded-lg">
          <thead className="bg-[#14213D] text-white">
            <tr>
              <th className=" px-4 py-2"> المنتج</th>
              <th className=" px-3 py-2">السعر</th>
              <th className=" px-3 py-2">الكمية</th>
              <th className=" px-4 py-2">الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-3 py-2">{item.price.toLocaleString()}</td>
                <td className="border border-gray-300 px-3 py-2">{item.quantity}</td>
                <td className="border border-gray-300 px-4 py-2">{item.totalPrice.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </>)
}
export default OrderDetails;