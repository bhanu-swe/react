import React from "react";
import ReactDom from "react-dom/client";
import Greetings from "../src/Components/Greeting";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Greetings />);
