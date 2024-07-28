import { fields } from '../utils/FormItmes';
import { ReactNode, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { Properties } from '../utils/FormComponents';
import React from 'react';
interface formData {
    defaultButton: string;
    items: {
        name: string;
        item: ReactNode;
        placeholder: string
        borderColor: string,
        backgroundColor: string,
        width: string | undefined
    }[];
};

const CreateForm = () => {
    const [color, setColor] = useColor("#561ecb");
    const [activeProp, setActiveProp] = useState(1);
    console.log(color)
    const [formData, setFormData] = useState<formData>({
        defaultButton: "Submit",
        items: [],
    })
    function handleAction(item: ReactNode) {
        const newItem = {
            name: "item 1",
            item: item,
            placeholder: "Enter the placeholder...",
            borderColor: "black", backgroundColor: "white", width:undefined
        }
        setFormData((prevFormData) => ({
            ...prevFormData,
            items: [...prevFormData.items, newItem],
        }));
    }

    return (
        <div className='my-5 border-t border-gray-600 flex justify-between'>
            <div className='flex flex-col gap-2 items-start  h-[500px] py-5 px-3 w-[25%]'>
                <Properties formData={formData} index={activeProp} setFormData={setFormData} />
            </div>
            <div style={{
                backgroundColor: color ? `${color.hex}` : "white",
            }} className='w-full py-5'>
                <div className="flex flex-col gap-2 max-w-5xl mx-auto">

                    {formData.items.map((item, index) => (
                        <div onClick={() => setActiveProp(index)}>{React.cloneElement(item.item as React.ReactElement, {
                            placeholder: item.placeholder,                            
                            width: item.width,
                            backgroundColor: item.backgroundColor,
                            borderColor: item.borderColor,
                            
                        })}</div>
                    ))}
                    <button className={`rounded-md border border-white py-2 px-2 bg-white font-semibold shadow-md`}>
                        {formData.defaultButton}
                    </button>
                </div>
            </div>
            <div className="h-[500px] py-5 px-3 w-[20%]">
                <div className="mb-5">
                     <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />
                </div>
                {fields.map((cat =>
                (
                    <div className='flex gap-2 flex-col items-start '>
                        <div className='flex gap-2 w-full '>
                            {cat.primary.map((item) => (
                                <button onClick={() => handleAction(item.item)} className='bg-white p-2 rounded-md flex-1 flex justify-center'>
                                    {item.icon}
                                </button>
                            ))}

                        </div>
                        <div className='flex gap-2 w-full '>
                            {cat.secondary.map((item) => (
                                <button onClick={() => handleAction(item.item)} className='bg-white p-2 rounded-md flex-1 flex justify-center'>
                                    {item.icon}
                                </button>
                            ))}

                        </div>
                    </div>
                )))}
            </div>

        </div>
    )
}

export default CreateForm