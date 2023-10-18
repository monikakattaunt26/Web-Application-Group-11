import React from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";

import SetRoutes from "./Components/Router/SetRoutes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SetRoutes />
  </React.StrictMode>
);
