import { storage } from "./config";

const BUCKET_ID = import.meta.env.VITE_CATEGORIE_BUKET_ID;

export const getImageUrl = (fileId) => {
  if (!fileId) return null;

  const url = storage.getFileView(BUCKET_ID, fileId);
  console.log("URL générée :", url);
  return url;
};
