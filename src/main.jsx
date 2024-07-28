import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Song } from "./constext/useContext.jsx";
import { Analytics } from "@vercel/analytics/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Song>
      <App />
      <Analytics />
    </Song>
  </React.StrictMode>
);
