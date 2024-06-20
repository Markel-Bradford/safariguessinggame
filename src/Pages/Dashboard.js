import React from 'react'
import SignIn from '../Components/SignIn';
import WordGame from '../WordGame';
import { toast } from "react-toastify";
import { fetchData, wait } from "../helpers";
import { useLoaderData } from 'react-router-dom';
import "./Dashboard.css"

//Dashboard loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName };
  }

// Actions
export async function dashboardAction({ request }) {
    await wait();
  
    const data = await request.formData();
    // Separates out the actions by the value to prevent repetively creating actions
    const { _action, ...values } = Object.fromEntries(data);
    //Stores the user input in the local storage
    if (_action === "newUser") {
      try {
        localStorage.setItem("userName", JSON.stringify(values.userName));
        return toast.success(`Welcome, ${values.userName}`);
      } catch (e) {
        throw new Error("There was a problem creating your account.");
      }
    }
}

const Dashboard = () => {
    const { userName } = useLoaderData();
  
    return (
    <div>
    {
        userName ? (
        <WordGame />
    ) : (
        <SignIn />
    )
}
    </div>
  )
}

export default Dashboard;
