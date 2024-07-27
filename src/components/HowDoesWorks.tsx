import React from 'react'

const HowDoesWorks = () => {
    return (
        <div className='max-w-7xl mx-auto font-Inter h-screen '>
            <div className="max-w-6xl mx-auto">
                <div className='px-5 flex flex-col  gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                        <path fill='#ff7e33' fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path>
                    </svg>
                    <h1 className='text-3xl font-bold text-white'>How does it works ?</h1>
                    <p className="text-gray-600 text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi minima aspernatur, quidem nulla cupiditate nam consequatur eligendi magni adipisci.</p>
                </div>
                <div className='my-10 border border-slate-500 rounded-lg lg:flex'>
                    <div className='bg-[#282f40] py-8 px-8 rounded-l-lg flex flex-col gap-5 border-r border-slate-600'>
                        <img width={50} height={50} src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" alt="" />
                        <h1 className='text-xl text-white font-bold'>First Feature</h1>
                        <p className="text-gray-600 text-sm lg:text-base">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum..</p>
                    </div>
                    <div className='bg-[#282f40] py-8 px-8 flex flex-col gap-5 border-r border-slate-600'>
                        <img width={50} height={50} src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" alt="" />
                        <h1 className='text-xl text-white font-bold'>First Feature</h1>
                        <p className="text-gray-600 text-sm lg:text-base">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum..</p>
                    </div>
                    <div className='bg-[#282f40] py-8 px-8 flex flex-col gap-5 border-r border-slate-600'>
                        <img width={50} height={50} src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" alt="" />
                        <h1 className='text-xl text-white font-bold'>First Feature</h1>
                        <p className="text-gray-600 text-sm lg:text-base">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum..</p>
                    </div>
                    <div className='bg-[#0f1729] py-8 px-8 flex flex-col gap-5 border-slate-600 lg:border-r lg:rounded-lg '>
                        <img width={50} height={50} src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" alt="" />
                        <h1 className='text-xl  text-white font-bold'>First Feature</h1>
                        <p className="text-gray-600 text-sm lg:text-base">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum..</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HowDoesWorks