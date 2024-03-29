import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home/Home.jsx";
import Error from "./routes/Error/Error.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyled from "./GlobalStyled.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
