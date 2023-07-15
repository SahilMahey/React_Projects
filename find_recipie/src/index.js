import { StrictMode } from "react";


import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom';



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
