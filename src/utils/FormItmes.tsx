// fields.ts
import { ReactNode } from 'react';
import { Input, Text, TextArea } from './FormComponents'
import { LuTextCursorInput } from 'react-icons/lu';
import { CiText } from 'react-icons/ci';
import { BsTextareaResize } from "react-icons/bs";
interface FieldTypes {
  primary: {
    name: string;
    icon: ReactNode;
    item: React.ReactNode;
  }[]
  secondary: {
    name: string,
    icon: ReactNode,
    item: React.ReactNode
  }[]
}

export const fields: FieldTypes[] = [{
  primary: [
    {
      icon: <LuTextCursorInput />,
      name: "input",
      item: <Input placeholder={undefined} backgroundColor={''} borderColor={''} width={undefined} />,
    },
    {
      icon: <CiText />,
      name: "text",
      item: <Text placeholder={undefined} backgroundColor={''} borderColor={''} width={''} />,
    },
  ],
  secondary: [{
    name: "textarea",
    icon: <BsTextareaResize />,
    item: <TextArea />
  }]
}];
