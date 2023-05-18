import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import 'react-toastify/dist/ReactToastify.css';
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

export default router;