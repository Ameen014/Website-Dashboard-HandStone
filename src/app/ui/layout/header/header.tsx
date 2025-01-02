import React, { useState } from "react";
import Link from "next/link";
import  { usePathname , useRouter } from "next/navigation"
import { useSelector } from "react-redux";
import Logo from "../../../../../public/Screenshot 2024-10-21 125909 (4).png"
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

const Header = ({ isCartOpen, toggleCart } : { isCartOpen: boolean , toggleCart: () => void; }) => {
  const path = usePathname();
  const router = useRouter();
  const home = ["/", "/Hand-Stone", "/home", "/Hand-Stone/"].includes(path);
  const phoneNumber = "+963933680777";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const cartQuantity = useSelector((state: any) => state.cart.totalQuantity);
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };
  const handleroute = () => {
    router.push('/dashboard')
  };

  return (
    <div>
      <header className="flex items-center justify-between p-8 bg-dark-blue text-white">
        {/* Logo */}

          <Image src={Logo} alt="Hand Stone" className="w-[34%] h-[34%] md:w-[140px] h-full cursor-pointer" onClick={handleroute}  />

        {/* Navigation */}
        <nav
          className={`fixed top-0 right-0 z-1 h-full w-64 bg-dark-blue transition-transform transform ${
            navVisible ? "translate-x-0" : "translate-x-full"
          } md:static md:flex md:justify-center md:items-center md:w-full md:h-auto md:transform-none`}
        >
          <ul className="flex flex-col items-center gap-6 mt-20 md:mt-0 md:flex-row md:gap-10 list-none m-0 p-0">
            <li>
              <Link
                href="/"
                className="text-white text-l transition-colors duration-300 hover:text-red-500"
                onClick={toggleNav}
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="/aboutUs"
                className="text-white text-l transition-colors duration-300 hover:text-red-500"
                onClick={toggleNav}
              >
                من نحن
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-white text-l transition-colors duration-300 hover:text-red-500"
                onClick={toggleNav}
              >
                منتجاتنا
              </Link>
            </li>
            <li>
              <Link
                href="/newProducts"
                className="text-white text-l transition-colors duration-300 hover:text-red-500"
                onClick={toggleNav}
              >
                جديدنا
              </Link>
            </li>
            <li>
              <a
                href={whatsappLink}
                className="text-white text-l bg-red-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-light-gray hover:text-dark-blue whitespace-nowrap "
              >
                تواصل معنا
              </a>
            </li>
          </ul>
        </nav>



        {/* Cart Icon */}
        <div
          onClick={toggleCart}
          className="relative flex items-center p-2 transition-shadow rounded-full cursor-pointer shadow-md bg-light-blue hover:bg-dark-blue"
        >
            <FaShoppingCart style={{ color: "white", fontSize: "25px"}} />
            <div className="absolute top-[-10px] right-[30px]">{cartQuantity}</div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="block text-2xl md:hidden"
          onClick={toggleNav}
        >
          ☰
        </button>
      </header>

      {/* Centered Text for Home Page */}
      {home && (
        <section className="flex items-center justify-center h-[70vh] bg-dark-blue text-white text-center">
          <h1 className="text-4xl font-semibold md:text-5xl	">الحجر الصناعي ومستلزمات البناء</h1>
        </section>
      )}
    </div>
  );
      
};

export default Header;
