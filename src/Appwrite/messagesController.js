import { db } from "./config";

const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_MESSAGES_ID;

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
export const getMessages = async () => {
  try {
    const response = await db.listDocuments(DATABASE_ID, COLLECTION_ID);
    return response.documents;
  } catch (error) {
    console.error("Erreur dans gettting des produit: ", error);
    return [];
  }
};

export const deleteMessage = async (documentId) => {
  try {
    await db.deleteDocument(DATABASE_ID, COLLECTION_ID, documentId);
    console.log("message supprime avec success");
    return true;
  } catch (error) {
    console.log("Error dans le suppression de message: ", error);
  }
};
