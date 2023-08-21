import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestrauntContainer
 *  - RestrauntCard
 *      - Img
 *      - Name of restraunt, Star Rating, Cuisine, etc.
 *      - Delivery Time
 * Footer
 *  - Copyright
 *  - Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // Whatever happens in react, it will happen inside the root

root.render(<AppLayout />);