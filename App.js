// created h1 element
const heading = React.createElement("h1", {
  // The object contains the attributes for the element
  className: "heading"
}, "Let us learn React in Deep");

// created div element and appended h1 as a children
const container = React.createElement("div", {className: "container"}, heading);

// The DOM element where we want to mount the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Calling root.render() method to render a react element into the DOM.
root.render(container);