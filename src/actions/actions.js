import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { wait } from "../helpers";

export async function signupAction({ request }) {
  await wait();
  
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    toast.success("Account created successfully! Redirecting to game...");
    return redirect("/"); // Redirect to the dashboard or game screen
  } catch (error) {
    toast.error(`Error signing up: ${error.message}`);
    return null; // Return null or an error message if needed
  }
}

export async function signinAction({ request }) {
    await wait();
  
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Signed in successfully! Redirecting to game...");
    return redirect("/"); // Redirect to the dashboard or game screen
  } catch (error) {
    toast.error(`Error signing in: ${error.message}`);
    return null; // Return null or an error message if needed
  }
}
