"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

    const router = useRouter();
    const login = useSelector((state : any) => state.auth.isLogin);

    if(!login){
        return router.push("/login");
    }

    return (
        <div className="h-auto">
         {children}
        </div>  
    );
    
}
export default DashboardLayout;
