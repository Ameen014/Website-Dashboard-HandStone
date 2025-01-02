"use client";

import React ,{ useState , useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartActions } from "../lib/store/cartSlice";
import { toast } from 'react-hot-toast';

const ProductsBox = ({products , orders}) => {

    const dispatch = useDispatch();
    const [productsArray , setProductsArray] = useState([]);

    useEffect(()=>{
      setProductsArray([])
        products.forEach((elem)=>{
            setProductsArray((prev)=>[
                ...prev , 
                {
                    id: elem.id,
                    name: elem.name,
                    categoryName: elem.categoryname,
                    photo: elem.photo,
                    sizeName: elem.sizename,
                    sizeUnit: elem.sizeunit,
                    price: elem.price,
                    quantity:10
                }
            ])
        })
      
    },[products])

    if(orders == "true"){
      toast.success("طلبك قيد التحضير تواصل معنا على الأرقام الموجودة بالأسفل للاستفسار");
      dispatch(cartActions.clearCart());
    }

    const handleAddToCart = (product) => {
        dispatch(cartActions.addItemToCart(product))
        toast.success('تم اضافة المنتج الى السلة بنجاح');
    }
    
    const handleQuantityChange = (id : number , value : string) => {
        setProductsArray(productsArray.map((product)=>
            product.id === id  ? {...product , quantity : value} : product
        ))
    }

    return (<>
  
          {productsArray.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image
                src={product.photo}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-56 object-cover cursor-pointer"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[18px] font-bold text-gray-800">{product.name}</h3>
                  <span className="text-[17px] text-gray-500">{product.categoryName}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[16px] text-gray-500">{product.sizeName} {product.sizeUnit} </span>
                  <span className="text-[15px] font-bold text-black">{product.price} ل.س</span>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-dark-blue text-white px-4 py-2 rounded-lg text-[15px] font-semibold hover:bg-white hover:text-dark-blue transition"
                  >
                    أضف إلى السلة
                  </button>
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    className="w-16 text-center border rounded-lg p-1"
                    min={1}
                  />
                </div>
              </div>
            </div>
          ))}
       
       </> )

}
export default ProductsBox;