"use client";

import React from "react";
import { login } from "../lib/actions";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authActions } from "../lib/store/authSlice";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  const formDataToSend = new FormData(e.currentTarget);
  
  const results = await login(formDataToSend);

    if(results.status == true){
      toast.success(` ${results.message} ${results.name}`);
      dispatch(authActions.login());
      router.push('/dashboard');
    }
    else {
      toast.error(`${results.message}`);
    }
  };

  return (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
             اسم المستخدم
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full bg-[#14213D] text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#14213D]">
            دخول
          </button>
        </form>
  );
};

export default LoginForm;
