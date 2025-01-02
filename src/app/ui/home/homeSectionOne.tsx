
import React from 'react';  
import Image from 'next/image';
import SectionOnePhoto from "../../../../public/تصميم-بدون-عنوان-4.png";  
import { fetchProductsSlider } from '../../lib/data';

const  HomeSectionOne = async  () => {  
    const data = await fetchProductsSlider();
    console.log("test the products" , data);

    return (  
        <div className="flex flex-col max-w-[1200px] mx-auto my-2 p-5 pt-[80px] bg-white rounded-lg shadow-lg overflow-hidden gap-10 md:flex-row"> 
            <div className="flex-1 overflow-hidden rounded-md">  
                <Image   
                    src={SectionOnePhoto}   
                    alt="Building"   
                    className="w-full h-auto block"   
                    />  
            </div>  
            <div className="flex-1 flex flex-col text-center">  
                <h1 className="text-title font-bold mb-3 text-3xl my-6 mb-8 md:text-center"> نظرة عامة </h1>  
                <p className="text-text text-lg md:text-center">  
                    في الأساس يعتبر الحجر الصناعي هو عبارة عن أحجار تم صبها في قوالب معينة وفق خطط وظروف خاصة. تلك القوالب تعمل على تشكيل المواد المستخدمة وتتنوع الألوان والأشكال حسب القالب وحسب المواد الداخلة في التشكيل. وذلك يمكن ملاحظة أن الحجر الصناعي يتميز بالشكل المميز المحدد الذي لا يمكن أن يتكون طبيعياً بحيث تأخذ صانعه الحجر الصناعي وسأستعرضه بأمانته وجودته العالية حسب حسن الجمال الخارجي. يقوم على صناعة كفاءات مدنية حسب الإضافات السنية في كل المقاييس والمساعدات. في علم الفن والعمارة والديكورات والملاعب ونسائيات الزرع في جعل منتجتها تأخذ من الحداثة بين إصالة الماضي في الحجر.  
                </p>  
            </div>  
        </div>  
    );  
};  

export default HomeSectionOne;