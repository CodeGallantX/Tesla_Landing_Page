import { displayName, email, photoURL, emailVerified, uid } from "../Signin/config.js";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
 

import elonMuskImg from "./assets/elon-musk.png"

export default function Account({ isLoggedIn, setIsLoggedIn }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data here, e.g., from localStorage or an API
    const user = {
      displayName: localStorage.getItem('displayName'),
      email: localStorage.getItem('email'),
      photoURL: localStorage.getItem('photoUrl'), // Use the correct key
    };
  
    // Set the user data in the state
    setUserData(user);
  }, []);
  

  function logOut() {
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    window.location.reload();
  }

  if (!isLoggedIn || userData === null) {
    // Data is not available, display a loading state or a message
    return <div>Loading...</div>;
  }

  return (
    <div className="account">
      <div className="account-details">
        {
          userData.photoURL && 
          <div className="userImage-container">
            <img src={userData.photoURL} alt="photo" />
          </div>
        }
        <h1>Email: <span>{userData.email}</span></h1>
        <h1>Name : <span>{userData.displayName}</span></h1>
        <div className="button-container">
          <button onClick={logOut}>
            Log Out
          </button>
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