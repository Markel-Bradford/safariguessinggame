import React from "react";
import { useLoaderData, Outlet } from "react-router-dom";
import { fetchData } from "../helpers";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div>
    <Navbar userName={userName}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
