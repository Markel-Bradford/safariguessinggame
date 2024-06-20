import React from 'react'
import { Form } from "react-router-dom";
import './Navbar.css'

const Navbar = ({user}) => {


  return (
    <div>
    <nav className="navbar">
    <div className="navbar-container">
      <ul className="nav-menu">
      <li>
       {user ? (
          <Form method="post" action="/logout" onSubmit={(event) => {
            // eslint-disable-next-line no-restricted-globals
            if (!window.confirm("Log out?")) {
                event.preventDefault() // Prevents page from deleting and refreshing
            }
          }}>
            <button type="submit" className="btn btn--warning">
              <span>Log out</span>
            </button>
          </Form>
        ) : (
            <a href="/signin">Sign In</a>
          )} 
        </li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
