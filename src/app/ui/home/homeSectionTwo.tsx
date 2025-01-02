import React from 'react'; 
import Image from 'next/image'; 
import SectionTwoPhoto from "../../../../public/تصميم-بدون-عنوان-5.png"; 

const HomeSectionTwo = () => {  
    return (  
        <div className="flex flex-col max-w-[1200px] mx-auto my-2 p-5 pt-[100px] bg-white rounded-lg shadow-lg overflow-hidden gap-10 md:flex-row"> 
            <div className="flex-1 flex flex-col ">  
              <h1 className="text-title font-bold text-center mb-3 text-3xl my-6 mb-8 ">خصائص الحجر الصناعي</h1>  
                <ul className="flex flex-col">  
                    <li className="text-text text-lg mb-2 ">الحجر الصناعي يعطي شكل جمالي، ويتميز بأقل من مثيلاته من الحجر.</li>  
                    <li className="text-text text-lg mb-2 ">يحتوي على مواد كيميائية بنسب مختلفة لتقوية قطعة الحجر.</li>  
                    <li className="text-text text-lg mb-2">درجة انضغاط الماء تأكد أن تكون معدومة: 15% - 3%.</li>  
                    <li className="text-text text-lg mb-2">الاستنزار المربع من الحجر الصناعي يتراوح ضغطه بين 5-7 ن/م².</li>  
                    <li className="text-text text-lg mb-2 ">مقاوم للعوامل الطبيعية.</li>  
                </ul>  
            </div>  
            <div className="flex-1 overflow-hidden rounded-md">  
                <Image   
                    src={SectionTwoPhoto}   
                    alt="Building"   
                    className="w-full h-auto block"   
                />  
            </div>  
        </div>  
    );  
};  

export default HomeSectionTwo;