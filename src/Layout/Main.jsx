import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* Other components will be placed here */}
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Main;