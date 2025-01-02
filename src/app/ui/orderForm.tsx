"use client";

import React , { useState } from "react";
import { createOrder } from "../lib/actions";

const OrderForm = ({cartItems}) => {
  
  const [isDelivery, setIsDelivery] = useState(false);

    return (
        <form action={createOrder} className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="customerName"
            className="block text-[16px] font-medium text-gray-700"
          >
            الاسم الكامل 
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-[16px] font-medium text-gray-700"
          >
            الرقم
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-[16px] font-medium text-gray-700"
          >
            العنوان
          </label>
          <textarea
            id="address"
            name="address"
            rows={2}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            required
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-center justify-center mt-4">
          <input
            type="checkbox"
            id="delivery"
            checked={isDelivery}
            onChange={(e) => setIsDelivery(e.target.checked)}
            className="h-6 w-6 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label
            htmlFor="delivery"
            className="mr-3 block text-[15px] text-gray-800"
          >
            شحن
          </label>
        </div>

        {/* Delivery Company */}
        {isDelivery && (
          <div>
            <label
              htmlFor="deliveryCompany"
              className="block text-[15px] font-medium text-gray-700"
            >
              شركة الشحن
            </label>
            <select
              id="deliveryCompany"
              name="deliveryCompany"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option value="الهرم">الهرم (مسارات)</option>
              <option value="النورس">النورس</option>
              <option value="العز">أبو العز</option>
              <option value="القلمون">القلمون </option>
              <option value="القدموس"> القدموس</option>
              <option value="الأمل"> الأمل</option>
            </select>
          </div>
        )}

        {/* Hidden Inputs for Cart Items */}
        {cartItems.map((item, index) => (
          <input
            key={index}
            type="hidden"
            name="cartItems"
            value={JSON.stringify(item)}
          />
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-[#14213D] rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          تأكيد الشراء
        </button>
        </form>
    );
};

export default OrderForm;
