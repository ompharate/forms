import { useNavigate } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";
const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full max-w-6xl mx-auto my-5 font-Inter'>
            <h1 className='text-3xl text-white px-5'>Create a Form</h1>
            <div className='my-10 flex flex-wrap flex-col items-center gap-5 lg:justify-normal lg:flex-row lg:items-start'>
                <div onClick={() => navigate('/create')} className='bg-[#282f40] h-[300px] w-[300px] flex justify-center items-center rounded-md hover:bg-[#242a3a] cursor-pointer'>
                    <IoMdAdd size={40} color='white'/>
                </div>                                     
            </div>
        </div>
    )
}

export default Dashboard