import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
//toast library
import { toast } from "react-toastify";
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';


export async function logoutAction() {
    try {
        // Sign out the user
        await signOut(auth);

        deleteItem({key: "userName"})

        toast.success("You've successfully logged out!")

        return redirect("/")

    }
    catch (error) {
    //return redirect
    toast.error(`Error logging out: ${error.message}`)
    return redirect("/dashboard")
}
}