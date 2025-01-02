import React from 'react';  
import aboutUsPhoto from "../../../../public/rtibLVI7gHJZo2pabexpTx3dVeCAP01eetEsr8pr.jpg";  
import Image from 'next/image';

const AboutUs = () => {  
    return ( 
        <>
            <div className="flex-1 rounded-[10px] overflow-hidden">  
                <Image   
                    src={aboutUsPhoto}   
                    alt="aboutUs"   
                    className="w-full h-auto block"   
                />  
            </div>  
            <div className="flex-1 flex flex-col justify-center">  
                <h1 className="text-[34px] font-bold mb-8 text-gray-800 text-center md:text-center"> هاند ستون </h1>  
                <p className="text-gray-600 leading-[1.8] text-[18px] md:text-center">  
                لقد حققت هاند ستون لصناعة الحجر الصناعى والحجر الجيري و الديكور الكلاسيكي و الـ GRC منذ تأسيسها مكانة هامة في السوق السوري حيث تعتبر واحدة من أهم الشركات المنتجة والمسوقة للحجر الصناعي و الحجر الجيري و الـ GRC ، والمنتجات الإسمنتية                 </p>  
            </div>  
        </>
    );  
};  

export default AboutUs;