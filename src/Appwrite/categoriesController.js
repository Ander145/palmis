import { ID } from "appwrite";
import { db } from "./config";

const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_PRODUCT_COLLECTION_ID;

export const addProduct = async (product) => {
  try {
    const response = await db.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      product
    );
    console.log("product ajouté: ", response);
    return response;
  } catch (error) {
    console.error("Erreur ajout product: ", error);
    throw error;
  }
};

export const getProducts= async () => {
  try {
    const response = await db.listDocuments(
      DATABASE_ID,
      COLLECTION_ID
    );
    return response.documents;
    
  } catch (error) {
    console.error("Erreur lors de la recuperation des produits: ", error)
    return [];
  }
}

export const deleteProducts = async (documentId) => {
  try {
    await db.deleteDocument(DATABASE_ID, COLLECTION_ID, documentId);
    console.log("Produit supprime avec success!")
    return true;
  } catch (error) {
    console.error("Erreur lors de la suppression: ", error)
  }
}
