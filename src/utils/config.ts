import { Account, Client, Databases } from "appwrite";

// export const DATABASES_ID = "64747cafb8c51754933c"

export const PROJECT_ID = "66a3d52800387f6fcaa2";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

const account = new Account(client);

export { account };
