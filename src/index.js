import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { StartRating } from "./StarRating";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <>
      <App /> 
        {/* <StartRating />
        <StartRating maxRating={10} /> */}
      </>
    }
  </React.StrictMode>
);