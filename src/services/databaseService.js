// databaseService.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Firestore functions
export const addDocument = async (collectionName, documentData) => {
  const docRef = await db.collection(collectionName).add(documentData);
  return docRef.id;
};

export const getDocument = async (collectionName, docId) => {
  const doc = await db.collection(collectionName).doc(docId).get();
  return doc.exists() ? { id: doc.id, ...doc.data() } : null;
};

export const updateDocument = async (collectionName, docId, updatedData) => {
  await db.collection(collectionName).doc(docId).update(updatedData);
};

export const deleteDocument = async (collectionName, docId) => {
  await db.collection(collectionName).doc(docId).delete();
};

export const getAllDocuments = async (collectionName) => {
  const snapshot = await db.collection(collectionName).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};