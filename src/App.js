import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main, { mainLoader } from './layouts/Main'
import Dashboard, { dashboardAction, dashboardLoader } from './Pages/Dashboard'
import { logoutAction } from './actions/logout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        loader: mainLoader,
        children: [
            {
                index: true,
                element: <Dashboard /> ,
                loader: dashboardLoader,
                action: dashboardAction,
            },
            {
                path: "logout",
                action: logoutAction
              }
        ]
    }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
