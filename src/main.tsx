import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navbar.tsx";
import { Index } from "./routes/index.tsx";
import { Auth } from "./routes/auth.tsx";
import { ProtectedRoute } from "./components/auth/protected-route.tsx";
import { AuthProvider } from "./routes/auth-provider.tsx";

const router = createBrowserRouter([
  {
    path: "/login-or-signup",
    element: <Auth />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <NavBar />
      </ProtectedRoute>
    ),
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
