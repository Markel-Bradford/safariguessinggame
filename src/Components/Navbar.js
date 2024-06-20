import React from 'react';
import { Form } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ user }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-menu">
            <li>
              {user ? (
                <Form method="post" action="/logout" onSubmit={(event) => {
                  if (!window.confirm("Log out?")) {
                    event.preventDefault();
                  }
                }}>
                  <button type="submit" className="btn btn--warning">
                    <span>Log out</span>
                  </button>
                </Form>
              ) : null }
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
