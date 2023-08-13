import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import { ToastContainer } from "react-toastify";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        {/* Other components will be placed here */}
        <div className="flex-grow">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Main;