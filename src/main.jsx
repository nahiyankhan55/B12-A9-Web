import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesProvider from "./Router/RoutesProvider.jsx";
import WebContextProvider from "./context/WebContextProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WebContextProvider>
      <RoutesProvider></RoutesProvider>
      <ToastContainer></ToastContainer>
    </WebContextProvider>
  </StrictMode>
);
