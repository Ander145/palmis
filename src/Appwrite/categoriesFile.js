import { ID } from "appwrite";
import { storage } from "./config";

export async function uploadImage(file) {
  const response = await storage.createFile(
    import.meta.env.VITE_CATEGORIE_BUKET_ID,
    ID.unique(),
    file
  );
  return response.$id;
}
