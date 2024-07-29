import { ReactNode } from "react";
import { account, database, DB_ID, FORM_ID, USER_FORMS } from "../utils/config";
import { v4 as uuidv4 } from "uuid";
interface loginUser {
  email: string;
  password: string;
}

export async function createUser(user: loginUser) {
  const newUser = await account.create("09", user.email, user.password);
  return newUser;
}

export async function loginUser(user: loginUser) {
  const newUser = await account.createEmailPasswordSession(
    user.email,
    user.password
  );
  return newUser;
}

export async function logoutUser() {
  await account.deleteSession("current");
}

interface formData {
  defaultButton: string;
  items: {
    name: string;
    item: ReactNode;
    placeholder: string;
    borderColor: string;
    backgroundColor: string;
    width: string;
  }[];
}
interface FormItem {
  backgroundColor: string;
  name: string;
  placeholder: string;
  borderColor: string;
  width: string;
}
export async function createForm(formData: formData) {
  const randomId = uuidv4();
  const formItems: FormItem[] = formData.items.map((item) => ({
    backgroundColor: item.backgroundColor,
    name: item.name,
    placeholder: item.placeholder,
    borderColor: item.borderColor,
    width: item.width,
    itemId: randomId,
  }));
  console.log(formItems)
  await database.createDocument(DB_ID, FORM_ID, randomId,{...formItems});

  // await database.createDocument(DB_ID, USER_FORMS,randomId,{
  //   ...formData,
  // });
  console.log("submited");
}
