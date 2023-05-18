import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import 'react-toastify/dist/ReactToastify.css';
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Shared/ErrorPage";
import MyToys from "../Pages/Toys/MyToys";
import AddToys from "../Pages/Toys/AddToys";
import AllToys from "../Pages/Toys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>
      },
      {
        path: "/add-a-toy",
        element: <AddToys></AddToys>
      }
    ]
  },
]);

export default router;