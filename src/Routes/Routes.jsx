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
import ToyDetails from "../Pages/Toys/ToyDetails";
import Banner from "../Pages/Home/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>
      },
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
      },
      {
        path: "/details/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
      }
    ]
  },
]);

export default router;