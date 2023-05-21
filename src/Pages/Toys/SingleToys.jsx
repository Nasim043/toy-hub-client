import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleToys = ({ toy }) => {
  const { _id, sellerName, name, subcategory, price, quantity } = toy;
  return (
    <tr className="hover">
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subcategory}</td>
      <td>&#36;{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">
        <Link className="btn btn-sm btn-secondary" to={`/details/${_id}`}><FaEye className="me-1"></FaEye>Details</Link>
      </td>
    </tr>
  );
};

export default SingleToys;