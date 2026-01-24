import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navbar.tsx";
import { Index } from "./routes/index.tsx";
import { Auth } from "./routes/auth.tsx";

const router = createBrowserRouter([
  {
    path: "/login-or-signup",
    element: <Auth />,
  },
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
