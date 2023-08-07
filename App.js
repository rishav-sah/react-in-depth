import React from "react";
import ReactDOM from "react-dom/client";

// created h1 element
const heading = React.createElement("h1", {
  // The object contains the attributes for the element
  className: "heading"
}, "Let us learn React in Deep");

const paragraph = React.createElement("p", { className: "p-1"}, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque libero quis, vitae veniam eligendi placeat aliquid reprehenderit vel quae rerum!")

// created div element and appended h1 as a children
const container = React.createElement("div", {className: "container"}, [heading, paragraph]);

// The DOM element where we want to mount the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Calling root.render() method to render a react element into the DOM.
root.render(container);