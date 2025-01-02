import LoginForm from "../ui/loginForm"

export default function Page () {

    return(<>
        <div className=" py-[100px] flex justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    أهلا بعودتك أيها القائد
                </h2>
                <LoginForm />   
            </div>
        </div>
    </>)
}