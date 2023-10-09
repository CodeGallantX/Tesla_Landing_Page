import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth"

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
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const twitterProvider = new TwitterAuthProvider()

export { auth, googleProvider, githubProvider, facebookProvider, twitterProvider }