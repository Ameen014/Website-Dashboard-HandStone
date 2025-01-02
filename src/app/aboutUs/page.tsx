import AboutUs from "../ui/aboutUs/aboutUs"

export default function Page () {

    return (
        <div className="flex flex-col max-w-[1200px] mx-auto my-2 p-5 pt-[100px] bg-white rounded-[10px] shadow-lg overflow-hidden gap-10 md:flex-row md:items-center">  
           <AboutUs />
        </div>  
    )

}