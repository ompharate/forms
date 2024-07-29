import React, { ReactNode } from 'react'
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
interface props {
    backgroundColor: string,
    formData: formData
    setActiveProp: React.Dispatch<React.SetStateAction<number>>
}

const MainFormPrev = ({ backgroundColor, formData, setActiveProp }: props) => {
    return (
        <div style={{
            backgroundColor: backgroundColor,
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
    )
}
export default MainFormPrev