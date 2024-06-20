import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export async function signupAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    toast.success("Account created successfully! Redirecting to game...");
    return redirect("/"); // Redirect or any other necessary action
  } catch (error) {
    toast.error(`Error signing up: ${error.message}`);
    return null; // Ensure the function returns a value or null
  }
}

export async function signinAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Signed in successfully! Redirecting to game...");
    return redirect("/"); // Redirect or any other necessary action
  } catch (error) {
    toast.error(`Error signing in: ${error.message}`);
    return null; // Ensure the function returns a value or null
  }
}
