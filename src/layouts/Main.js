import React from "react";
import { useLoaderData, Outlet } from "react-router-dom";
import { fetchData } from "../helpers";

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
