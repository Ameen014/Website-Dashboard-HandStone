import React from 'react';  

const HomeContactSection = () => {  
    const phoneNumber = "963933680777";  
    const whatsappLink = `https://wa.me/${phoneNumber}`;  

    return (  
        <div className="bg-[url('/تصميم-بدون-عنوان-2.png')] flex items-center justify-center flex-col max-w-[80%] mx-auto p-10 bg-[#f0f0f0] rounded-lg shadow-lg relative">  
        <div className='text-center w-full h-full bg-[#f8f8f8] opacity-[0.9]'>
            <h1 className="text-3xl font-bold my-5 text-title">هل لديك مشروع بحاجة للحجر الصناعي؟</h1>  
            <h2 className="text-2xl mb-7 text-text">قم بالتواصل معنا</h2>  
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">  
                <button className="bg-[#14213D] text-white py-[12px] px-[25px] border-none rounded-[5px] cursor-pointer text-[18px] transition-colors duration-300 no-underline">اتصل بنا</button>  
            </a>  
            <div className="my-5 text-[20px] text-black">رقم الهاتف: {phoneNumber}</div>  
        </div>
        </div>  
    );  
};  

export default HomeContactSection;