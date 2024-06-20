import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "./SignIn.css";
import { CheckIcon } from "@heroicons/react/24/solid";

// SignIn Loader
export function signinLoader() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve({ user });
    });
  });
}

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to the dashboard or game screen
    } catch (error) {
      console.log("Error signing in: ", error);
    }
  };

  return (
    <div className="container">
      <div className="welcomeFormContainer">
        <ul id="welcome">
          <li>W</li>
          <li>e</li>
          <li>l</li>
          <li>c</li>
          <li>o</li>
          <li>m</li>
          <li>e</li>
          <li>!</li>
        </ul>
        <form className="signInForm" method="POST" onSubmit={handleSignIn}>
          <h2 id="welcomeMessage">Sign in to play!</h2>
          <input
            type="email"
            id="userName"
            required
            placeholder="e.g. jane.doe@gmail.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submitbutton">
            Sign In
            <CheckIcon width={20} />
          </button>
          <NavLink to="/signup">
            <p className="signUpLink">Don't have an account? Click here to sign up!</p>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
