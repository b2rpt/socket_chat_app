import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Layout.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/about" element={<div>About</div>}/>
      <Route path="/profile" element={<div>Profile</div>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </RouterProvider>
  </React.StrictMode>
);
