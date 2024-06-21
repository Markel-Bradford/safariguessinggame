import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useFetcher } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
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
  const navigate = useNavigate();

  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
    }
  }, [isSubmitting]);


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to the dashboard or game screen
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
        <fetcher.Form className="signInForm" method="POST" action="/signup" onSubmit={handleSignup} ref={formRef}>
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
            ref={focusRef}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submitbutton">
          {isSubmitting ? <span>Creating Account...</span> : <span>Create Account</span>}
            <UserPlusIcon width={20} />
          </button>
          <NavLink to="/signin">
            <p className="signUpLink">Have an account? Click here to sign in</p>
          </NavLink>
        </fetcher.Form>
      </div>
    </div>
  );
};

export default SignUp;
