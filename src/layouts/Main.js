import React from "react";
import { useLoaderData, Outlet } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export function mainLoader() {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            resolve({ user });
        });
    });
}

const Main = () => {
    const { user } = useLoaderData();

  return (
    <div>
      <Navbar user={user ? user.email : ""} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
