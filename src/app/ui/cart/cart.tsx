"use client";

import React from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../lib/store/cartSlice";
import { IoIosCloseCircle } from "react-icons/io";
import Link from "next/link";

const Cart = ({isCartOpen , toggleCart} : {isCartOpen : boolean , toggleCart : () => void}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state : any) => state.cart.items);
    const totalQuantity = useSelector((state : any) => state.cart.totalQuantity);

    const handleRemoveItem = (id : number) => {
        dispatch(cartActions.removeItemFromCart(id));
        toast.success("تم حذف المنتج من السلة بنجاح");
    };

    const handleChangeQuantity = (id : number, quantityChange : number) => {
        dispatch(cartActions.changeItemQuantity({ id, quantityChange }));
    };

  return(<>
    {isCartOpen && (
        <div className="fixed top-0 right-0 w-80 h-screen bg-white shadow-lg z-[1]">
        {/* Cart Header */}
        <div className="flex justify-between items-center p-4 border-b-4 border-gray-800 z-1">
            <h2 className="text-lg font-bold">عربة التسوق</h2>
            <button
            onClick={toggleCart}
            className="bg-white rounded-full border-2 border-gray-800 w-8 h-8 font-bold text-red-500 flex justify-center items-center"
            >
                X
            </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
            {cartItems.length === 0 ? (
            <p className="text-base font-medium mt-4">لا توجد منتجات في عربة التسوق.</p>
            ) : (
            cartItems.map((item) => (
                <div
                key={item.id}
                className="flex justify-between items-center py-2 border-b border-gray-200"
                >
                <div>
                    <p className="font-semibold text-[17px]">{item.name}</p>
                    <p className="text-[15px] text-gray-500">الكمية: {item.quantity}</p>
                    <p className="text-[15px] text-gray-500">السعر الإجمالي: {item.totalPrice} ل.س</p>
                    <div className="flex items-center mt-2">
                    <button
                        onClick={() => handleChangeQuantity(item.id, -1)}
                        className="text-gray-800 w-6 h-6 flex justify-center items-center border border-gray-800 rounded-full"
                    >
                        -
                    </button>
                    <p className="mx-4">{item.quantity}</p>
                    <button
                        onClick={() => handleChangeQuantity(item.id, 1)}
                        className="text-gray-800 w-6 h-6 flex justify-center items-center border border-gray-800 rounded-full"
                    >
                        +
                    </button>
                    </div>
                </div>
                <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 text-lg"
                >
                   <IoIosCloseCircle style={{fontSize:"24px"}} />
                </button>
                </div>
            ))
            )}
        </div>

        {/* Order via WhatsApp Button */}
        {cartItems.length > 0 && (
            <div className=" text-center">
                <Link href="/orders" passHref>
                    <button onClick={toggleCart} className="bg-[#F97D1D] text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#F97D1D]">
                        أكمل الطلبية
                    </button>
                </Link>
            </div>
        )}
        </div>
    )}
   </>)

}
export default Cart;