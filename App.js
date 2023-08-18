import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// React.createElement => Object => HTML Element (When Rendered into the DOM)
const heading = React.createElement(
  "h1", // html tag
  {
    // Object that contains attributes of the html element
    id: "heading"
  },
  "React in Deep - using React.createElement" // children of the elements or inner content if single element
);

// JSX is not HTML or HTML in JS. Moreever, It's HTML-like or XML-like syntax. Babel transpiles it to React.createElement
const jsxHeading = (
  <h1 className="title" tabIndex="1">
    React in Depth using JSX
  </h1>
);

// React Functional Component
const Title = () => {
  return (
    <h1>React In Deep in JSX - Title Component</h1>
  );
};

// Component Composition
const HeadingComponent = () => {
  return (
    <div className="container">
      { heading }
      { jsxHeading }
      <Title />
      <h2>React In Depth - Functional Component</h2>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root")); // Whatever happens in react, it will happen inside the root

root.render(<HeadingComponent />);