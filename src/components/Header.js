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
    setNav(!nav);
  };

  console.log("Header Rendered");

  return (
    <header className="w-full items-center justify-between p-4 text-gray-800 md:flex">
      <div className="w-20">
        <img className="w-full" src={LOGO_URL} alt="app-logo" />
      </div>

      <nav>
        <div className="absolute right-8 top-6 cursor-pointer md:hidden">
          <button onClick={handleNav} className="cursor-pointer">
            {!nav ? (
              <FontAwesomeIcon icon={faBars} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faClose} size="lg" />
            )}
          </button>
        </div>
        <ul
          className={`absolute left-0 w-full bg-gray-200 py-4 transition-all duration-300 ease-in md:static md:flex md:items-center md:bg-white ${
            nav ? "block" : "hidden"
          }`}
        >
          <li className="mx-2 cursor-pointer rounded-md px-4 py-2 font-medium transition-colors duration-300 hover:bg-gray-400">
            {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="mx-2 cursor-pointer rounded-md px-4 py-2 font-medium transition-colors duration-300 hover:bg-gray-400">
            <Link to="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="mx-2 cursor-pointer rounded-md px-4 py-2 font-medium transition-colors duration-300 hover:bg-gray-400">
            <Link to="about" onClick={handleNav}>
              About
            </Link>
          </li>
          <li className="mx-2 cursor-pointer rounded-md px-4 py-2 font-medium transition-colors duration-300 hover:bg-gray-400">
            <Link to="contact" onClick={handleNav}>
              Contact
            </Link>
          </li>
          <li className="mx-2 cursor-pointer rounded-md px-4 py-2 font-medium transition-colors duration-300 hover:bg-gray-400">
            <Link to="grocery" onClick={handleNav}>
              Grocery
            </Link>
          </li>
        </ul>
      </nav>
      <div className="absolute right-14 top-4 md:static">
        <button className="mx-4 cursor-pointer rounded-md bg-gray-400 px-4 py-2 font-medium transition-colors duration-300">
          Cart
        </button>
        <button
          className="mx-4 cursor-pointer rounded-md bg-gray-400 px-4 py-2 font-medium transition-colors duration-300"
          onClick={() =>
            btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
          }
        >
          {btnName}
        </button>
      </div>
    </header>
  );
};

export default Header;
