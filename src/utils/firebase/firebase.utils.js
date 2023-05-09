import { initializeApp } from "firebase/app"; // Creates an app instance
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  updateDoc,
} from "firebase/firestore"; // doc = retrieve/an instance, getDoc = get the data
////////////////////

const firebaseConfig = {
  apiKey: "AIzaSyAwffnrzZbQGRlnYXseUXBwxIMJj516368", // it's not secret
  authDomain: "book-store-webshop-db.firebaseapp.com",
  projectId: "book-store-webshop-db",
  storageBucket: "book-store-webshop-db.appspot.com",
  messagingSenderId: "224301990374",
  appId: "1:224301990374:web:85f6c8ad35ee0c1eacd627",
};

const firebaseApp = initializeApp(firebaseConfig); // uses obove, to make CRUD actions

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//////////////////////

export const db = getFirestore(firebaseApp);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

//////////////////

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

/////////////////////
/* export const getUsersFavourites = async (userId) => {
  const userDocRef = doc(db, "users", userId);
  const querySnapshot = await getDocs(userDocRef);
}; */

export const queryDocuments = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const { favourite } = docSnap.data();
    return favourite;
  } catch (error) {
    console.error("Error querying documents:", error);
  }
};

export const queryUsersFavourites = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const { favourite } = docSnap.data();
    return favourite;
  } catch (error) {
    console.error("Error querying documents:", error);
  }
};

/////////////////////

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid); // calling the doc from db. Collection and ... uid = uniqe id

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const favourite = [];

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        favourite,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

//////////////////
export const updateUserDocument = async (userId, updatedData) => {
  try {
    const userRef = doc(db, "users", userId);

    // Use the update() method to update specific fields of the document
    await updateDoc(userRef, updatedData);

    console.log("User document updated successfully!");
  } catch (error) {
    console.error("Error updating user document:", error);
  }
};

/////////////////////

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
