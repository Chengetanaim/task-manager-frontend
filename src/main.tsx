import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navbar.tsx";
import { Index } from "./routes/index.tsx";
import { Auth } from "./routes/auth.tsx";
import { ProtectedRoute } from "./components/auth/protected-route.tsx";
import { AuthProvider } from "./routes/auth-provider.tsx";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#4ade80",
              secondary: "#fff",
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </AuthProvider>
  </StrictMode>,
);
