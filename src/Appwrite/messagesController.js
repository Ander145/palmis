import { db } from "./config";

const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_COLLECION_ID;

export const addMessages = async (message) => {
  try {
    const response = await db.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      "unique()",
      message
    );
    console.log("message envoye: ", message);
  } catch (error) {
    console.error("Erreur ajout message: ", error);
  }
};