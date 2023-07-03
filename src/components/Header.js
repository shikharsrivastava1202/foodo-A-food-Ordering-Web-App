import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";

const Header = () => {
  // super-powerful local state variable is created
  // whole component re-renders everytime with updated values of the local state variables
  const [loginBtn, setLoginBtn] = useState("Login");

  console.log("header component rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          <img className="logo" src={LOGO_URL} alt="logo here" />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;