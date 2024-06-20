import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export async function logoutAction() {
  try {
    await signOut(auth);
    toast.success("You've successfully logged out!");
    return redirect("/signin"); // Redirect to the sign-in page after logging out
  } catch (error) {
    toast.error(`Error logging out: ${error.message}`);
    return redirect("/dashboard"); // Redirect to dashboard if there's an error
  }
}
