import React, { useEffect, useState } from "react";
import { useLoaderData, Outlet } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

export function mainLoader() {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            resolve({ user });
        });
    });
}

const Main = () => {
    // Listen to authentication changes and update user state
    const { user: initialUser } = useLoaderData();
    const [user, setUser] = useState(initialUser);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
  
      return () => unsubscribe();
    }, []);
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%", transition: { duration: 0.2 } }}
    exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Navbar user={user} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Main;
