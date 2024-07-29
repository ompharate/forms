import React, { ReactNode } from 'react'
import { fields } from '../utils/FormItmes'
import { ColorPicker, IColor } from 'react-color-palette'
import { FiSend } from 'react-icons/fi'
import { MdOutlineContentCopy } from 'react-icons/md'
import "react-color-palette/css";
import { createForm } from '../hooks/appwrite'

interface formData {
    defaultButton: string;
    items: {
        name: string;
        item: ReactNode;
        placeholder: string
        borderColor: string,
        backgroundColor: string,
        width: string
    }[];
};


interface props {
    color: IColor,
    setColor: React.Dispatch<React.SetStateAction<IColor>>
    handleAction: (item: ReactNode,name:string) => void
    formData:formData
}


const RightSection = ({ formData,setColor, color, handleAction }: props) => {

    async function submitForm(){
        await createForm(formData);
    }

    return (
        <>
            <div className='mb-5 flex gap-2 justify-center'>
                <button onClick={submitForm} className='bg-[#9234eb] rounded-xl px-2 text-white flex gap-2 items-center  py-2 hover:scale-x-105 hover:transition-all'>Publish <FiSend /></button>
                <button disabled={true} className='bg-[#9234eb] rounded-xl px-2 text-white opacity-60  py-2 hover:scale-x-105 hover:transition-all'><MdOutlineContentCopy /></button>
            </div>
            <div className="mb-5">
                <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />
            </div>
            {
                fields.map((cat =>
                (
                    <div className='flex gap-2 flex-col items-start '>
                        <div className='flex gap-2 w-full '>
                            {cat.primary.map((item) => (
                                <button onClick={() => handleAction(item.item,item.name)} className='bg-white p-2 rounded-md flex-1 flex justify-center'>
                                    {item.icon}
                                </button>
                            ))}

                        </div>
                        <div className='flex gap-2 w-full '>
                            {cat.secondary.map((item) => (
                                <button onClick={() => handleAction(item.item,item.name)} className='bg-white p-2 rounded-md flex-1 flex justify-center'>
                                    {item.icon}
                                </button>
                            ))}

                        </div>
                    </div>
                )))
            }

        </>
    )
}

export default RightSection