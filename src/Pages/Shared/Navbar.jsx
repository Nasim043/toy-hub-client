import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
  const { loading } = useContext(AuthContext)
  console.log(loading);
  return (
    <div>
      <h1>navbar</h1>
    </div>
  );
};

export default Navbar;