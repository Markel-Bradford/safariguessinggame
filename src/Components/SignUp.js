import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Form, NavLink } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import './SignIn.css';

// SignUp Loader
export function signupLoader() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve({ user });
    });
  });
}

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing up: ", error);
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
        <Form className="signInForm" method="POST" onSubmit={handleSignup}>
          <h2 id="welcomeMessage">Sign up to play!</h2>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="e.g. john.doe@gmail.com"
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
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="submitbutton">
            Create Account
            <UserPlusIcon width={20} />
          </button>
          <NavLink to="/signin">
            <p className="signUpLink">Have an account? Click here to sign in</p>
          </NavLink>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
