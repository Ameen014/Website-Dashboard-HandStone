"use client";

import React , {useState , useEffect} from "react";
import OrderForm from "../ui/orderForm"
import OrderDetails from "../ui/orderDetails"
import { useSelector } from "react-redux";

export default function Page () {

    const cartItems = useSelector((state : any) => state.cart.items);

    const [isClient, setIsClient] = useState(false);  

    useEffect(() => {  
        setIsClient(true); // This will set isClient to true after the component mounts  
    }, []);  

    if (!isClient) {  
        return null; // Render nothing until the component is mounted  
    }  

    return(<>
        <div className="py-5 text-center flex flex-col justify-center ">
            <p className="text-[22px] text-[#F97D1D] font-bold mb-8 mt-3">اكمال عملية الشراء</p>
            <div className="mb-8 px-[40px]">
                <OrderDetails cartItems={cartItems} />
            </div>
            <div className="px-[70px]">
                <OrderForm cartItems={cartItems}  />
            </div>
        </div>
    </>)
    
};