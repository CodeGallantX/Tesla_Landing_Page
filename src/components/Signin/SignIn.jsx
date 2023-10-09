import { auth, googleProvider, githubProvider } from "./config.js" 
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth"
import Home from "../Home.jsx"

import { redirect, Navigate } from "react-router-dom" // Import redirect function
import { useState, useEffect } from "react"


export default function SignIn({ onSignIn }) {

  const [ value, setValue ] = useState()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const email = localStorage.getItem("email")
      if (email) {
        setValue(email)
        onSignIn(email)
      }
    }, 2000) // Wait for 2 seconds before checking localStorage
    return () => clearTimeout(timeoutId)
  }, [onSignIn])

  const handleEmailSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(`User signed in with email:`, userCredential.user.email)
        setValue(userCredential.user.email)
        localStorage.setItem("email", userCredential.user.email)
        onSignIn(userCredential.user.email) // Call onSignIn callback function
      })
      .catch((error) => {
        console.error(`Error signing in with email:`, error)
      })
  }

  const handleEmailSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(`User signed up with email:`, userCredential.user.email)
        setValue(userCredential.user.email)
        localStorage.setItem("email", userCredential.user.email)
        onSignIn(userCredential.user.email) // Call onSignIn callback function
      })
      .catch((error) => {
        console.error(`Error signing up with email:`, error)
      });
  }
  
  const handleClick = (provider) => {
    let authProvider;
    switch (provider) {
      case 'google':
        authProvider = googleProvider;
        break;
      case 'github':
        authProvider = githubProvider;
        break;
      default:
        console.error(`Unknown provider: ${provider}`);
        return;
    }
    signInWithPopup(auth, authProvider).then((data) => {
      console.log(`User signed in with ${provider}:`, data.user.email)
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
      onSignIn(data.user.email) // Call onSignIn callback function
    })
  }

  useEffect(() => {
    console.log("localStorage:", localStorage.getItem("email"))
    if (value) {
      console.log("Redirecting to home page...")
      redirect("/")
    }
  }, [value])

  return (
    <div className="sign-in-container">
      {value ? (
        <Navigate to="/" />
      )
        : (
          <div className="sign-in-component">
            <form onSubmit={(e) => {
              e.preventDefault()
              const email = e.target.email.value
              const password = e.target.password.value
              handleEmailSignUp(email, password)
            }}>
              <button onClick={() => handleClick('google')}>
              Sign in with Google
              </button>
              <button onClick={() => handleClick('github')}>
                Sign in with GitHub
              </button>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit">Sign up with Email</button>
            </form>
            <form onSubmit={(e) => {
              e.preventDefault()
              const email = e.target.email.value
              const password = e.target.password.value
              handleEmailSignIn(email, password)
            }}>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit">Sign in with Email</button>
            </form>

          </div>
        )
      }
    
    </div>
  )
}