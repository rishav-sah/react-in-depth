import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery = lazy(() => import("./components/Grocery.js"));
const Contact = lazy(() => import("./components/Contact.js"));
const About = lazy(() => import("./components/About.js"))

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
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
      },
      {
        path: "/contact",
        element: <Suspense fallback={<h1>Loading...</h1>}><Contact/></Suspense>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      }
    ],
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // Whatever happens in react, it will happen inside the root

root.render(<RouterProvider router={appRouter} />);