import { Link } from "react-router-dom";

const SingleToys = ({ toy }) => {
  const { _id, sellerName, name, subcategory, price, quantity } = toy;
  return (
    <tr className="hover">
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td><Link className="btn btn-sm btn-secondary" to={`/details/${_id}`}>Details</Link></td>
    </tr>
  );
};

export default SingleToys;