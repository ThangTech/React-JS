import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/user.jsx";
import BookPage from "./pages/book.jsx";
import "./style/style.css";
import TodoApp from "./components/todo/TodoApp.jsx";
import ErrorPage from "./pages/error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, //nếu route ko đúng sẽ render component này
    children: [
      {
       index: true,
       element: <TodoApp />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/book",
        element: <BookPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
