import { auth, googleProvider, githubProvider } from "./config.js";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import Home from "../Home/Home.jsx";

import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import { useState, useEffect } from "react";

export function seeIfLoggedIn() {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      if (user) {
        resolve(user.email);
      } else {
        resolve(null);
      }
    }, (error) => {
      reject(error);
    });
  });
}

export default function SignIn({ onSignIn }) {
  const [value, setValue] = useState();
  const [error, setError] = useState({ signIn: null, signUp: null });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const email = localStorage.getItem("email");
      if (email) {
        setValue(email);
        onSignIn(email);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [onSignIn]);

  const handleEmailSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`User signed in with email:`, user.email);

        // Access user data directly from the user object
        const { displayName, email, photoURL, emailVerified } = user;

        // Update local storage and state
        localStorage.setItem("email", email);
        localStorage.setItem("photoURL", photoURL);
        localStorage.setItem("displayName", displayName);
        localStorage.setItem("emailVerified", emailVerified);
        setValue(email);

        // Call the onSignIn callback
        onSignIn(email);
        setError({ signIn: null, signUp: null });
      })
      .catch((error) => {
        console.error(`Error signing in with email:`, error);
        setError({ signIn: "Invalid credentials", signUp: null });
      });
  };

  const handleEmailSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`User signed up with email:`, user.email);

        // Access user data directly from the user object
        const { displayName, email, photoURL, emailVerified } = user;

        // Update local storage and state
        localStorage.setItem("email", email);
        localStorage.setItem("photoURL", photoURL);
        localStorage.setItem("displayName", displayName);
        localStorage.setItem("emailVerified", emailVerified);
        setValue(email);

        // Call the onSignIn callback
        onSignIn(email);
        setError({ signIn: null, signUp: null });
      })
      .catch((error) => {
        console.error(`Error signing up with email:`, error);
        setError({ signIn: null, signUp: "Invalid credentials" });
      });
  };
  

  const handleClick = (provider) => {
    let authProvider;
    switch (provider) {
      case "google":
        authProvider = googleProvider;
        break;
      case "github":
        authProvider = githubProvider;
        break;
      default:
        console.error(`Unknown provider: ${provider}`);
        return;
    }
    signInWithPopup(auth, authProvider)
      .then((data) => {


        console.log(`User signed in with ${provider}:`, data.user.email);
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("photoURL", data.user.photoURL);
        localStorage.setItem("displayName", data.user.displayName);
        localStorage.setItem("emailVerified", data.user.emailVerified);
        onSignIn(data.user.email);
        setError({ signIn: null, signUp: null });
      })
      .catch((error) => {
        console.error(`Error signing in with ${provider}:`, error);
        if (provider === "github") {
          setError({ signIn: null, signUp: "Invalid credentials" });
        } else {
          setError({ signIn: "Invalid credentials", signUp: null });
        }
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log("localStorage:", localStorage.getItem("email"));
    if (value) {
      console.log("Redirecting to home page...");
      navigate("/home");
    }
  }, [value, navigate]);

  useEffect(() => {
    if (error.signIn && error.signIn.code === "auth/account-exists-with-different-credential") {
      fetchSignInMethodsForEmail(auth, error.signIn.email)
        .then((methods) => {
          setError({ signIn: `This email is already associated with a different sign-in method: ${methods.join(", ")}`, signUp: null });
        })
        .catch((error) => {
          console.error(`Error fetching sign-in methods for email:`, error);
          setError({ signIn: "Invalid credentials", signUp: null });
        });
    }
  }, [error.signIn]);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleEmailSignUp(email, password);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleEmailSignIn(email, password);
  };

  return (
    <div className="auth-container">
      {value ? (
        <></>
      ) : (
        <div className="auth-component">
          <form className="sign-up" onSubmit={handleRegisterSubmit}>
            <h1>
              Register
              <Link className="close-auth" to="/home">
                &times;
              </Link>
            </h1>
            <div className="sign-in-methods-container">
              <div className="google-sign-in">
                <button onClick={() => handleClick("google")}>
                  <i className="bx bxl-google google-icon"></i>
                  Sign in with Google
                </button>
              </div>

              <div className="github-sign-in">
                <button onClick={() => handleClick("github")}>
                  <i className="bx bxl-github github-icon "></i>
                  Sign in with GitHub
                </button>
              </div>
            </div>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button className="auth-register-buttons" type="submit">
              Register
            </button>
            {error.signUp && <p className="error-message">{error.signUp}</p>}
          </form>
          <form className="sign-in" onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button id="log-in-button" className="auth-register-buttons" type="submit">
              Login
            </button>
            {error.signIn && <p className="error-message">{error.signIn}</p>}
          </form>
        </div>
      )}
    </div>
  );
}
