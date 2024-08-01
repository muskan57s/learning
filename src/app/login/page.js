import InputComponent from "../ui/InputComponent";
import MyButton from "../ui/MyButton";

function LoginPage()
{
    return (
        <div className='max-w-xl mx-auto mt-20 bg-gray-300 p-5 min-h-[400px]'>
            <h1 className='text-3xl text-gray-800 font-bold text-center'>
                Login
            </h1>
            <label>Enter Name</label>
            <InputComponent />
            <MyButton />
        </div>
    )
}

export default LoginPage;