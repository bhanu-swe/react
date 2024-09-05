import React from "react";
import ReactDom from "react-dom/client";
import Greetings from "../src/Components/Greeting";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Greetings />);
