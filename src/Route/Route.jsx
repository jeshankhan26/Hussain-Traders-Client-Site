import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Pages/Frontend/Root";
import Home from "../Pages/Frontend/Home";
import CylinderPage from "../Pages/Frontend/CylinderPage";
import SafetyPage from "../Pages/Frontend/SafetyPage";
import ContactPage from "../Pages/Frontend/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {index:true,element:<Home/>},
      {path:"cylinder",element:<CylinderPage/>},
      {path:"safety",element:<SafetyPage/>},
      {path:"contact",element:<ContactPage/>},
    ]
  },
]);

