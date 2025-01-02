"use client";

import React  from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect , useState } from "react";
const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

    const router = useRouter();
    const login = useSelector((state : any) => state.auth.isLogin);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

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
