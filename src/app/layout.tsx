"use client"

import React ,{ useState , useEffect }  from "react";
import "./globals.css";
import Header from "./ui/layout/header/header";
import Footer from "./ui/layout/footer/footer";
import Cart from "./ui/cart/cart";
import { Provider } from 'react-redux';
import store from './lib/store';
import { Toaster } from "react-hot-toast";
import { cairo } from "./ui/fonts/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isCartOpen, setisCartOpen] = useState(false);

  const toggleCart = () => {
      setisCartOpen(!isCartOpen);
  };

  useEffect(() => {
    document.body.style.opacity = isCartOpen ? "0.8" : "1";
  }, [isCartOpen]);  

  return (
    <html lang="ar">
      <head>
        <link rel="icon" href="/Screenshot 2024-10-21 125909 (4).png" />
      </head>
      <body className={`m-0  antialiased opacity-100 ${cairo.className} `} dir="rtl">
        <Provider store = {store}>
          <Header isCartOpen ={isCartOpen} toggleCart ={toggleCart}/> 
          <Cart isCartOpen ={isCartOpen} toggleCart ={toggleCart}/>
          <Toaster position="top-center" />
            {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
