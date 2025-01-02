"use client";  

import React, { useEffect } from "react";  
import { useSelector } from "react-redux";  
import { useRouter } from "next/navigation";  

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {  
    const router = useRouter();  
    const login = useSelector((state: any) => state.auth.isLogin);  

    useEffect(() => {  
        // Redirect to login if not authenticated  
        if (!login) {  
            router.push("/login");  
        }  
    }, [login, router]);  

    // You may return null while redirecting  
    if (!login) return null;   

    return (  
        <div className="h-auto">  
            {children}  
        </div>  
    );  
};  

export default DashboardLayout;