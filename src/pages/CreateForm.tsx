import { ReactNode, useState } from "react";
import { Properties } from '../utils/FormComponents';
import MainFormPrev from '../components/MainFormPrev';
import RightSection from '../components/RightSection';
import { useColor } from "react-color-palette";
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

const CreateForm = () => {
    const [color, setColor] = useColor("#a193bd");
    const [activeProp, setActiveProp] = useState<number>(0);
    const [formData, setFormData] = useState<formData>({
        defaultButton: "Submit",
        items: [],
    })
    function handleAction(item: ReactNode,name:string) {
        const newItem = {
            name: name,
            item: item,
            placeholder: "Enter the placeholder...",
            borderColor: "black", backgroundColor: "white", width: "100%"
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
            <MainFormPrev backgroundColor={color.hex} formData={formData} setActiveProp={setActiveProp} />
            <div className="h-[500px] py-5 px-3 w-[20%]">
                <RightSection formData={formData} color={color} setColor={setColor} handleAction={handleAction}/>
            </div>
        </div>
    )
}

export default CreateForm