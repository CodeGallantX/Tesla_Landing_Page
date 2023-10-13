import { displayName, email, photoURL, emailVerified, uid } from "../Signin/config.js";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
 


import elonMuskImg from "./assets/elon-musk.png"
import guestPhoto from "./assets/guest-photo.png"

export default function Account({ isLoggedIn, setIsLoggedIn }) {
  const [userData, setUserData] = useState({
    displayName: "not sure",
    email: "not sure",
    photoURL: guestPhoto
  });



  useEffect(() => {
    const storedDisplayName = localStorage.getItem('displayName');
    const storedPhotoURL = localStorage.getItem('photoURL');
    // Fetch user data here, e.g., from localStorage or an API
    const user = {
      displayName: storedDisplayName === "null" ? "not sure" : storedDisplayName,
      email: localStorage.getItem('email') || "not sure",
      photoURL: storedPhotoURL === "null" ? guestPhoto : storedPhotoURL
      // Use the correct key
    };
  
    // Set the user data in the state
    setUserData(user);
  }, []);

  function logOut() {
    localStorage.removeItem("email");
    localStorage.removeItem("photoURL");
    localStorage.removeItem("displayName");
    localStorage.removeItem("emailVerified");
    setIsLoggedIn(false);
    window.location.reload();
  }

  return (
    <div className="account">
      <div className="account-details">
        {userData && userData.photoURL ? (
          <div className="userImage-container">
            <img src={userData.photoURL} alt="photo" />
          </div>
        ) : (
          <div className="userImage-container">
            <img src={guestPhoto} alt="guest photo" />
          </div>
        )}
        <h1>Email: <span>{userData && userData.email}</span></h1>
        <h1>Name: <span>{userData && userData.displayName}</span></h1>
        <div className="button-container">
          {userData.email === "not sure" ? (
            <Link to="/">Log In</Link>
          ) : (
            <button onClick={logOut}>
              Log Out
            </button>
          )}
          <button onClick={logOut}>
            Edit Profile
          </button>
        </div>
      </div>

      <div className="account-people">
        <h1>Other Users</h1> 
        <div className="account-users-container">
          <div className="account-user-explanation">
            <p>name</p>
            <p>bank balance</p>
          </div>
          <div className="account-user">
            <img src={elonMuskImg} alt="" />
            <h2>Elon Musk</h2>
          </div>
          <div className="account-user">
            <img src={elonMuskImg} alt="" />
            <h2>Elon Musk</h2>
          </div>
          <div className="account-user">
            <img src={elonMuskImg} alt="" />
            <h2>Elon Musk</h2>
          </div>
          <div className="account-user">
            <img src={elonMuskImg} alt="" />
            <h2>Elon Musk</h2>
          </div>
          <div className="account-user">
            <img src={elonMuskImg} alt="" />
            <h2>Elon Musk</h2>
          </div>
        </div>
        <Link to="users">More People</Link>
      </div>
      <div className="account-leaderboard">
        <h1>Leaderboard (Top 10):</h1>
        <div className="account-user-explanation">
          <p>name</p>
          <p>bank balance</p>
        </div>
      </div>
    </div>
  );
}