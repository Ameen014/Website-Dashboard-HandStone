import React from 'react';  

const HomeSectionThree = () => {  
    const features = [  
        {  
            title: "ألوان متجانسة وثابتة لا تتأثر بالعوامل الطبيعية المتقلبة",  
            description: "تتميز الألوان بالثبات والجمال.",  
        },  
        {  
            title: "دقة في المقاس والشكل المطلوب وسرعة بنائه",  
            description: "تضمن دقة عالية في التصنيع.",  
        },  
        {  
            title: "امكانية التشكيل الجميل وتنوعه بمختلف الأدوات والألوان",  
            description: "تتيح خيارات تصميم متعددة.",  
        },  
        {  
            title: "الحجر الصناعي عازل للحرارة ومقاوم للرطوبة والعفن",  
            description: "يضمن بيئة صحية ومريحة.",  
        },  
        {  
            title: "مقاومة للخدوش والتآكل",  
            description: "تضمن متانة عالية على مر الزمن.",  
        },  
        {  
            title: "سهولة الصيانة والتنظيف",  
            description: "تحتاج إلى عناية بسيطة للحفاظ على جمالها.",  
        },
    ];  

    return (  
        <div className="max-w-[1200px] mx-auto p-[40px_20px] bg-[#f7f7f7]">  
            <h1 className="text-title font-bold mb-3 text-4xl my-6 mb-8 text-center">مميزات الحجر الصناعي</h1>  
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">  
                {features.map((feature, index) => (  
                    <div className="bg-white rounded-[10px] shadow-lg text-center p-5" key={index}>  
                        <h2 className="text-[18px] font-bold mb-3 text-title">{feature.title}</h2>  
                        <p className="text-text mb-5">{feature.description}</p>  
                        <div className="w-[50px] h-[2px] bg-title mx-auto "></div>  
                    </div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default HomeSectionThree;