import { useContext } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const MySingleToy = ({ toy }) => {
  const { control, setControl } = useContext(AuthContext);
  const { _id, sellerName, name, subcategory, price, quantity } = toy;

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you want to delete this toy?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const options = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        }
        fetch(`http://localhost:5000/toys/${id}`, options)
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setControl(!control);
              toast.success("Your toy has been deleted", {
                closeOnClick: true,
              })
            }
          })
        // Swal.fire(
        //   'Deleted!',
        //   'Your toy has been deleted.',
        //   'success'
        // )
      }
    })
  }

  return (
    <>
      <tr className="hover">
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{subcategory}</td>
        <td>&#36;{price}</td>
        <td className="text-center">{quantity}</td>
        <td>
          <div className="flex justify-center space-x-2">
            <Link to={`/details/${_id}`}><FaEye></FaEye></Link>
            <Link to={`/update-a-toy/${_id}`}><FaEdit></FaEdit></Link>
            <FaTrashAlt className="cursor-pointer" onClick={() => handleDelete(_id)}></FaTrashAlt>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MySingleToy;