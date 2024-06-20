import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main, { mainLoader } from './layouts/Main'
import Dashboard, { dashboardAction, dashboardLoader } from './Pages/Dashboard'

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
            }

        ]
    }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
