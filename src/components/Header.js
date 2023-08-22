import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  
  console.log("Header Rendered");
  
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app-logo" />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="login-btn" onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;