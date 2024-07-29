import { Account, Client, Databases } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
export const DB_ID = import.meta.env.VITE_DATABASE_ID;
export const USER_FORMS = import.meta.env.VITE_USER_FORMS;
export const FORM_ID = import.meta.env.VITE_FORM_ID;
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

const account = new Account(client);
const database = new Databases(client);
export { account,database };