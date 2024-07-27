import React from 'react'

const MainInfo = () => {
    return (
        <div className='max-w-7xl mx-auto font-Inter h-screen py-20 '>
            <div className="max-w-5xl mx-auto  py-5 ">
                <h1 className='text-3xl  font-bold text-white text-center lg:text-7xl'>Shaping a world with <br /> reimagination.</h1>
                <p className='text-gray-500 text-center py-8 text-sm lg:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                </p>
                <div className="flex justify-center gap-5 py-6">
                    <button className='bg-[#9234eb] rounded-xl px-2  text-white font-bold py-3 hover:scale-x-105 hover:transition-all'>
                        Get Started
                    </button>
                    <button className='bg-[#282f40] border border-slate-500 rounded-xl px-2 text-white font-bold py-3 hover:scale-x-105 hover:transition-all'>
                        Learn more
                    </button>
                </div>
            </div>
            <div className="max-w-4xl mx-auto py-8 my-5 flex justify-around border-t-[0.1px] border-b-[0.1px] border-gray-600">
                <div className='flex flex-col gap-2'>
                    <h1 className='text-sm font-semibold text-white lg:text-xl'>The lowest price</h1>
                    <p className='text-gray-600 text-sm lg:text-base'>Some text here</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-sm font-semibold text-white lg:text-xl'>The lowest price</h1>
                    <p className='text-gray-600 text-sm lg:text-base'>Some text here</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-sm font-semibold text-white lg:text-xl'>The lowest price</h1>
                    <p className='text-gray-600 text-sm lg:text-base'>Some text here</p>
                </div>

            </div>
        </div>

    )
}

export default MainInfo;