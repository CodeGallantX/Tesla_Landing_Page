import { auth, provider } from "./config.js" 
import { signInWithPopup } from "firebase/auth"
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

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log("User signed in:", data.user.email)
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
      onSignIn(data.user.email) // Call onSignIn callback function
    })
  }

  useEffect(() => {
    console.log("localStorage:", localStorage.getItem("email"))
    if (value) {
      console.log("Redirecting to home page...")
      redirect("/") // Use redirect function
    }
  }, [value])

  return (
    <div className="sign-in-container">
      {value ? (
        <Navigate to="/" />
      )
        : (
          <div className="sign-in-component">
            <button onClick={handleClick}>
              Sign in with Google
            </button>
          </div>
        )
      }
    
    </div>
  )
}