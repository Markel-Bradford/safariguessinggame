import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useFetcher } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "./SignIn.css";
import { CheckIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

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

  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
    }
  }, [isSubmitting]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to the dashboard or game screen
    } catch (error) {
      toast.error("Error signing in: ", error);
    }
  };

  const handleGuestSignIn = async (e) => {
    e.preventDefault();
    try {
        let guestEmail = "guest.player1086@gmail.com"
        let guestPassword = "guestpass"
        setEmail(guestEmail)
        setPassword(guestPassword)
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
    } catch (error) {
        toast.error("Error signing in: ", error);
    }
  }

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
        <fetcher.Form
          className="signInForm"
          method="POST"
          onSubmit={handleSignIn}
          ref={formRef}>
          <h2 id="welcomeMessage">Sign in to play!</h2>
          <input
            type="email"
            id="userName"
            required
            placeholder="e.g. jane.doe@gmail.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={focusRef}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="btn--container">
          <button
            type="submit"
            className="submitbutton"
            disabled={isSubmitting}>
            {isSubmitting ? <span>Signing in...</span> : <span>Sign in</span>}
            <CheckIcon width={20} />
          </button>
          <button
            type="button"
            className="submitbutton"
            onClick={handleGuestSignIn}>
            Guest Login
          </button>
          </div>
          <NavLink to="/signup">
            <p className="signUpLink">
              Don't have an account? Click here to sign up!
            </p>
          </NavLink>
        </fetcher.Form>
      </div>
    </div>
  );
};

export default SignIn;
