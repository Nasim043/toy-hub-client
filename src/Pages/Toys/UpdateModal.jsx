import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateModal = ({ modalData }) => {
  const { control, setControl } = useContext(AuthContext);
  const { register, formState: { errors } } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      "name": e.target.name.value,
      "price": e.target.price.value,
      "quantity": e.target.quantity.value,
      "description": e.target.description.value
    }
    fetch('https://b7a11-toy-marketplace-server-side-nasim043.vercel.app/toys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged === true) {
          setControl(!control);
          toast.success('Toy updated successfully', {
            closeOnClick: true,
          })
        }
      })
  }
  return (
    <>
      <input type="checkbox" id="my-update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleSubmit} className="">
            <h3 className='text-2xl font-semibold'>Update Toy</h3>

            <div className="my-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                name='name'
                id="name"
                placeholder="Toy name"
                defaultValue={modalData.name}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              />
            </div>


            <div className="w-full mb-4">
              <label htmlFor="price" className="block font-medium mb-2">
                Price:
              </label>
              <input
                type="number"
                id="price"
                placeholder="price"
                name="price"
                defaultValue={modalData.price}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="w-full mb-4">
              <label htmlFor="quantity" className="block font-medium mb-2">
                Available Quantity:
              </label>
              <input
                type="number"
                name='quantity'
                id="quantity"
                placeholder="quantity"
                defaultValue={modalData.quantity}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block font-medium mb-2">
                Detail Description:
              </label>
              <textarea
                name='description'
                id="description"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                rows="4"
                defaultValue={modalData.description}
              />
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </form >
        </div>
      </div>
    </>
  );
};

export default UpdateModal;