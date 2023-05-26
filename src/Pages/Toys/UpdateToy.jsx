import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  const toy = useLoaderData();
  const navigate = useNavigate();
  useTitle('Update')
  // console.log(toy);

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
    fetch(`https://b7a11-toy-marketplace-server-side-nasim043.vercel.app/toys/${toy._id}`, {
      method: 'PATCH',
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
          navigate('/my-toys')
        }
      })
  }

  return (
    <>
      <div className="my-container">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto shadow-xl px-7 py-10 rounded-xl">
          <h3 className='text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text '>Update Toy</h3>

          <div className="my-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              name='name'
              id="name"
              placeholder="Toy name"
              defaultValue={toy.name}
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
              defaultValue={toy.price}
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
              defaultValue={toy.quantity}
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
              defaultValue={toy.description}
            />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form >
      </div >
    </>
  );
};

export default UpdateToy;