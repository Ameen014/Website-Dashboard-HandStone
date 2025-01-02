"use client";

import React, { useState, useEffect } from "react";
import { fetchProductsSlider } from "../../lib/data";

const HomeProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProductsSlider();
      setProducts(fetchedProducts);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (products.length === 0) return 0; 
        return (prevIndex + 1) % products.length;
      });
    }, 2000); 

    return () => clearInterval(interval); 
  }, [products]);

  return (
    <div className="bg-gray-100 py-8">
      <div className="relative overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 300}px)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[300px] text-center flex-shrink-0 snap-center bg-white shadow-lg rounded-lg p-4 cursor-pointer transform transition-transform"
            >
              <img
                src={product.photo}
                alt={product.name}
                className="w-full h-48 rounded-lg object-cover"
              />
              <h3 className="text-[19px] font-semibold text-black mt-3 mb-2">
                {product.name}
              </h3>
              <p className="text-[17px] text-gray-600 mb-2">{product.categoryname}</p>
              <p className="text-[17px] text-gray-600">{product.price} ل.س</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProductsSection;
