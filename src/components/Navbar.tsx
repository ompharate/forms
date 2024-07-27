import React, { useEffect, useState } from 'react'
import { account } from '../utils/config';
import { logoutUser } from '../hooks/appwrite';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    async function getUser() {
        const user = await account.get();
        if (user) setIsLogin(true);
    }

    async function handleLoginLogout() {
        try {
            await logoutUser();
        } catch (error) {
            console.log(error)
        }
        navigate("/login");
    }

    useEffect(() => {
        getUser();
    }, [])


    return (
        <div className='w-full font-Inter'>
            <div className='px-2 max-w-7xl mx-auto flex justify-between py-4'>
                <h1 className='text-3xl font-bold text-white'>
                    CrazyForms
                </h1>
                <div className=' flex gap-5'>
                    {!isLogin ? (
                        <button className='text-white hidden font-bold lg:block'>
                            How does it work's ?
                        </button>
                    ) : null}

                    <button onClick={handleLoginLogout} className='bg-[#9234eb] rounded-xl px-2 text-white font-bold py-2 hover:scale-x-105 hover:transition-all'>
                        {isLogin ? "Logout" : "Get Started"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar