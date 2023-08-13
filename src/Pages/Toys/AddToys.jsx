import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";
import { useNavigate } from "react-router-dom";

const AddToys = () => {
  const navigate = useNavigate()
  useTitle('Add Toy')
  const { user } = useContext(AuthContext)
  const [rating, setRating] = useState(0);
  useTitle('Add Toys');
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = formData => {
    console.log(formData);
    formData.rating = rating;
    fetch('http://localhost:5000/toys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged === true) {
          toast.success('Toy added successfully', {
            closeOnClick: true,
          })
          navigate('/my-toys')
        }
      })
  }

  return (
    <div className="my-container">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto shadow-xl px-7 py-10 rounded-xl">
        <h3 className='text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text'>New Product</h3>
        <div className="my-4">
          <label htmlFor="pictureUrl" className="block text-gray-700 font-medium mb-2">
            Picture URL:
          </label>
          <input
            type="url"
            {...register('pictureUrl')}
            id="pictureUrl"
            placeholder="Picture URL"
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            {...register('name')}
            id="name"
            placeholder="Toy name"
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sellerName" className="block font-medium mb-2">
            Seller Name:
          </label>
          <input
            type="text"
            {...register('sellerName')}
            id="sellerName"
            defaultValue={user?.displayName}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block font-medium mb-2">
            Seller Email:
          </label>
          <input
            type="email"
            {...register('sellerEmail')}
            id="sellerEmail"
            defaultValue={user?.email}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 md:pe-3 mb-4">
            <label htmlFor="subcategory" className="block font-medium mb-2">
              Sub-category:
            </label>
            <select
              {...register('subcategory')}
              id="subcategory"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
              <option value="racing-car">Racing Car</option>
              <option value="police-car">Police Car</option>
              <option value="truck">Truck</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="w-full md:w-1/2 mb-4">
            <label htmlFor="price" className="block font-medium mb-2">
              Price:
            </label>
            <input
              type="number"
              step="0.01"
              {...register('price')}
              id="price"
              placeholder="price"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 md:pe-3 mb-4">
            <label htmlFor="rating" className="block font-medium mb-2">
              Rating: {rating}
            </label>
            <Rating
              style={{ maxWidth: 180 }}
              value={rating}
              onChange={setRating}
              isRequired
            />
          </div>

          <div className="w-full md:w-1/2 mb-4">
            <label htmlFor="quantity" className="block font-medium mb-2">
              Available Quantity:
            </label>
            <input
              type="number"
              {...register('quantity')}
              id="quantity"
              placeholder="quantity"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2">
            Detail Description:
          </label>
          <textarea
            {...register('description')}
            id="description"
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            rows="4"
          />
        </div>

        <button type="submit" className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6'>Submit</button>
      </form >
    </div >
  );
};

export default AddToys;