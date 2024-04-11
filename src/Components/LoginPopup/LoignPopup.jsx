import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email " required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>
          {" "}
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>by click, I agree to the terms and conditions</p>
        </div>
        {currentState === "Login" ? (
          <p>
            To create a new Account
            <span onClick={() => setCurrentState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have an Account
            <span onClick={() => setCurrentState("Login")}> Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
