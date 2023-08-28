import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const handleNav = () => {
    console.log(nav)
    setNav(!nav);
  };

  console.log("Header Rendered");
  
  return (
    <header className="p-4 w-full md:flex justify-between items-center text-gray-800">
      <div className="w-20">
        <img className="w-full" src={LOGO_URL} alt="app-logo" />
      </div>
      
      <nav>
        <div className="absolute right-8 top-6 cursor-pointer md:hidden">
          <button onClick={handleNav} className="cursor-pointer">
            {!nav ? <FontAwesomeIcon icon={faBars} size="lg" /> : <FontAwesomeIcon icon={faClose} size="lg" />}
          </button>
        </div>
        <ul className={`py-4 absolute left-0 w-full bg-gray-200 transition-opacity ease-in duration-300 md:static md:flex md:items-center md:bg-white md:opacity-100 ${nav ? "opacity-100" : "opacity-0"}`}>
          <li className="mx-2 rounded-md px-4 py-2 font-medium transition-colors duration-300 cursor-pointer hover:bg-gray-400">
            {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="mx-2 rounded-md px-4 py-2 font-medium transition-colors duration-300 cursor-pointer hover:bg-gray-400">
            <Link to="/" onClick={handleNav}>Home</Link>
          </li>
          <li className="mx-2 rounded-md px-4 py-2 font-medium transition-colors duration-300 cursor-pointer hover:bg-gray-400">
            <Link to="about" onClick={handleNav}>About</Link>
          </li>
          <li className="mx-2 rounded-md px-4 py-2 font-medium transition-colors duration-300 cursor-pointer hover:bg-gray-400">
            <Link to="contact" onClick={handleNav}>Contact</Link>
          </li>
          <li className="mx-2 rounded-md px-4 py-2 font-medium transition-colors duration-300 cursor-pointer hover:bg-gray-400">
            <Link to="grocery" onClick={handleNav}>Grocery</Link>
          </li>
        </ul>
      </nav>
      <div className="absolute right-14 top-4 md:static">
        <button
            className="mx-4 rounded-md px-4 py-2 font-medium bg-gray-400 transition-colors duration-300 cursor-pointer"
          >
            Cart
          </button>
        <button
          className="mx-4 rounded-md px-4 py-2 font-medium bg-gray-400 transition-colors duration-300 cursor-pointer"
          onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}
        >
          {btnName}
        </button>
      </div>
    </header>
  );
};

export default Header;