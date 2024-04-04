import { db, storage } from "./firebase";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export const addDocument = async (collectionRef, document) => {
  try {
    await addDoc(collection(db, collectionRef), document);
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
};

export const deleteDocument = async (collectionRef, id) => {
  try {
    await deleteDoc(doc(db, collectionRef, id));
    return true;
  } catch (error) {
    console.error("Error deleting document: ", error);
    return false;
  }
};

export const getCollection = async (collectionRef) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionRef));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { status: true, data };
  } catch (error) {
    console.error("Error getting collection: ", error);
    return { status: false, data: [] };
  }
};

export const getDocument = async (collectionRef, id) => {
  try {
    const docRef = doc(db, collectionRef, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...docSnap.data() };
      return { status: true, data };
    } else {
      return { status: false, data: null };
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    return { status: false, data: null };
  }
};

export const getDocumentsByQuery = async (collectionRef, field, value) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, collectionRef), where(field, "==", value))
    );
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { status: true, data };
  } catch (error) {
    console.error("Error getting documents by query: ", error);
    return { status: false, data: [] };
  }
};

export const updateDocument = async (collectionRef, document, id) => {
  try {
    await setDoc(doc(db, collectionRef, id), document);
    return true;
  } catch (error) {
    console.error("Error updating document: ", error);
    return false;
  }
};

export const uploadImage = async (image) => {
  const timeStamp = new Date().getTime();
  const imagesRef = ref(storage, `images/${timeStamp}`);
  try {
    await uploadBytes(imagesRef, image);
    const url = await getDownloadURL(imagesRef);
    return { status: true, url };
  } catch (error) {
    console.error("Error uploading image: ", error);
    return { status: false };
  }
};

export const uploadImages = async (images) => {
  let urls = [];
  for (let i = 0; i < images.length; i++) {
    const timeStamp = new Date().getTime();
    const imagesRef = ref(storage, `images/${timeStamp}`);
    try {
      await uploadBytes(imagesRef, images[i]);
      const url = await getDownloadURL(imagesRef);
      urls.push(url);
    } catch (error) {
      console.error("Error uploading image: ", error);
      return { status: false };
    }
  }
  return { status: true, urls };
};

export const deleteImage = async (imageUrl) => {
  const imagesRef = ref(storage, imageUrl);
  try {
    await deleteObject(imagesRef);
    return true;
  } catch (error) {
    console.error("Error deleting image: ", error);
    return false;
  }
};
