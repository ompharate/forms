import { account } from "../utils/config";

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