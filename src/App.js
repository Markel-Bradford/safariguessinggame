import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main, { mainLoader } from './layouts/Main'
import Dashboard, { dashboardAction, dashboardLoader } from './Pages/Dashboard'
import { logoutAction } from './actions/logout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { signupAction } from './actions/actions'
import SignUp, { signupLoader } from './Components/SignUp'
import SignIn from './Components/SignIn'

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
              },
              {
                path: "signup",
                element: <SignUp />,
                loader: signupLoader,
                action: signupAction
              },
              {
                path: "signin",
                element: <SignIn />,
                loader: signupLoader,
                action: signupAction
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
