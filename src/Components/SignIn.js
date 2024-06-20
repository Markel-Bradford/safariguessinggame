import React, { useState } from "react";
import { NavLink, Form } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "./SignIn.css";

// SignIn Loader
export function signinLoader() {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            resolve({user});
        });
    });
  };

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
        <Form className="signInForm" method="POST" onSubmit={handleSignIn}>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="submitbutton">
            Sign In
          </button>
          <NavLink to="/signup">
            <p className="signUpLink">Don't have an account? Click here to sign up!</p>
          </NavLink>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
