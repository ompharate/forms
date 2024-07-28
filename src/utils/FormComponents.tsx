// FormComponents.tsx
import React, { ReactNode, useState } from 'react';

interface Properties {
    placeholder: string | undefined
    borderColor: string,
    backgroundColor: string,
    width: string | undefined
}

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

export const Input = (props: Properties) => <input style={{
    border: "1px solid",
    borderColor: props.borderColor,
    backgroundColor: props.backgroundColor,
    width:  props.width!=undefined ?  parseInt(props.width) : "100%"

}} className='rounded-md outline-none py-3 px-2  focus:border-red-500 focus:border-2' placeholder={props.placeholder} type="text" />;
export const Text = (props: Properties) => <p>Some text</p>;
export const TextArea = () => <textarea className='rounded-md outline-none py-3 px-2 w-full' />;

export const Properties = ({ formData, index, setFormData }: { formData: formData, index: number, setFormData: React.Dispatch<React.SetStateAction<formData>> }) => {
    const [placeholder, setPlaceholder] = useState<string>("")
    const [borderColor, setBorderColor] = useState<string>("")
    const [backgroundColor, setBackgroundColor] = useState<string>("")
    const [width, setWidth] = useState<string | undefined>(undefined)
    const [error, setError] = useState(false);

    function handleUpdateProp() {
        const item = formData.items[index]
        if (!item) {
            setError(true)
            return;
        }
        setError(false)
        const filteredItem = formData.items.filter((_, i) => i !== index)
        const newItem = {
            name: item.name,
            item: item.item,
            placeholder: placeholder
            , borderColor: borderColor, backgroundColor: backgroundColor, width: width
        }
        setFormData((prevFormData) => ({
            ...prevFormData,
            items: [...filteredItem, newItem],
        }));
    }
    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-red-400'> {error ? " Please select any field" :null}</h2>
            <div className='flex gap-2'>
                <input className='rounded-md outline-none py-2 px-2 w-full' type="text" value={width ? width : undefined} onChange={(e) => setWidth(e.target.value)} placeholder="Width" />
                <input className='rounded-md outline-none py-2 px-2 w-full' type="text" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} placeholder="Background Color" />
            </div>
            <div className='flex flex-col gap-2'>
                <input className='rounded-md outline-none py-2 px-2 w-full' type="text" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} placeholder="Border Color" />
                <input onChange={(e) => setPlaceholder(e.target.value)} value={placeholder} className='rounded-md outline-none py-2 px-2 w-full' type="text" placeholder="Placeholder" />
            </div>
            <button onClick={() => handleUpdateProp()} className={`rounded-md border border-white py-2 px-2 bg-white  shadow-md font-bold`}>Update</button>
        </div>
    );
};