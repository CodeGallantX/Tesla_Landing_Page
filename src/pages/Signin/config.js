import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, TwitterAuthProvider, onAuthStateChanged } from "firebase/auth"
import { getFirestore, collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCh6R_NzXNeXMmNveYBGonz5_GHb4BQ8J4",
  authDomain: "tesla-clone-b7cd3.firebaseapp.com",
  projectId: "tesla-clone-b7cd3",
  storageBucket: "tesla-clone-b7cd3.appspot.com",
  messagingSenderId: "916991909605",
  appId: "1:916991909605:web:ad0054c74dd2c225f7fe0c",
  measurementId: "G-5Q8372J9LS"
};

const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const db = getFirestore(app);
let displayName, email, photoURL, emailVerified;

const addUserToFirestore = async (user) => {
  displayName = user.displayName;
  email = user.email;
  photoURL = user.photoURL;
  emailVerified = user.emailVerified;
  
  // Get the ID of the last document in the 'Users' collection
  const querySnapshot = await getDocs(collection(db, 'Users'));
  const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
  const lastDocId = lastDoc ? parseInt(lastDoc.id) : 0;

  // Set the ID for the new document
  const newDocId = lastDocId + 1;

  // Set the data for the new document
  const docData = {
    'user_name': displayName,
    'user_email': email,
    'photoUrl': photoURL,
    'emailVerified': emailVerified
  };

  // Set the new document in the 'Users' collection with the custom ID
  const newDocRef = await setDoc(doc(db, 'Users', newDocId.toString()), docData);

  console.log(newDocRef);
};// Listen for changes in the user's authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    addUserToFirestore(user);
  }
});

export { auth, googleProvider, githubProvider, facebookProvider, twitterProvider, displayName, email, photoURL, emailVerified };