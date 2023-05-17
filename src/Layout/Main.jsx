import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* Other components will be placed here */}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;