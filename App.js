import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, ["I am h1 from child1"]),
    React.createElement("h2", {}, ["I am h2 from child1"]),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, ["I am h1 from child1"]),
    React.createElement("h2", {}, ["I am h2 from child1"]),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log("hello");
