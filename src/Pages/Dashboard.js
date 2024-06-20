import React from 'react'
import SignIn from '../Components/SignIn';
import WordGame from '../WordGame';
import { toast } from "react-toastify";
import { wait } from "../helpers";
import { useLoaderData } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import "./Dashboard.css"

//Dashboard loader
export function dashboardLoader() {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            resolve({user});
        });
    });
  };

// Actions
export async function dashboardAction({ request }) {
    await wait();
  
    const data = await request.formData();
    // Separates out the actions by the value to prevent repetively creating actions
    const { _action, ...values } = Object.fromEntries(data);
    //Stores the user input in the local storage
}

const Dashboard = () => {
    const { user } = useLoaderData();
  
    return (
    <div>
    {
        user ? (
        <WordGame />
    ) : (
        <SignIn />
    )
}
    </div>
  )
}

export default Dashboard;
