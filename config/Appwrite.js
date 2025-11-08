import { Client, Account, TablesDB, Storage, ID, Query } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT_ID) 
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); 

export const account = new Account(client);
export const tablesdb = new TablesDB (client);
export const storage = new Storage(client);
export { ID, Query };