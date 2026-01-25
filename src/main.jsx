import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
       { 
              path: "/", 
              element: <App></App> 
       },
       {
              path: '/login',
              element: <div>Login</div>
       },
       {
              path: '/register',
              element: <div>register</div>
       },
       {
              path: '/user',
              element: <div>user</div>
       },
       {
              path: '/product',
              element: <div>product</div>
       }
]
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
