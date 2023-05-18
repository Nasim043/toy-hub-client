import { useForm } from "react-hook-form";

const AddToys = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className="my-container">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto shadow-xl px-7 py-10 rounded-xl">
        <h3 className='text-2xl font-semibold'>New Product</h3>
        <div className="my-4">
          <label htmlFor="pictureUrl" className="block text-gray-700 font-medium mb-2">
            Picture URL:
          </label>
          <input
            type="url"
            {...register('pictureUrl', { required: true })}
            id="pictureUrl"
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
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block font-medium mb-2">
            Seller Email:
          </label>
          <input
            type="email"
            {...register('sellerEmail', { required: true })}
            id="sellerEmail"
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 md:pe-3 mb-4">
            <label htmlFor="subcategory" className="block font-medium mb-2">
              Sub-category:
            </label>
            <select
              {...register('subcategory', { required: true })}
              id="subcategory"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
              <option value="Math Toys">Math Toys</option>
              <option value="Language Toys">Language Toys</option>
              <option value="Science Toys">Science Toys</option>
            </select>
          </div>

          <div className="w-full md:w-1/2 mb-4">
            <label htmlFor="price" className="block font-medium mb-2">
              Price:
            </label>
            <input
              type="number"
              {...register('price', { required: true })}
              id="price"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block font-medium mb-2">
            Rating:
          </label>
          <input
            type="number"
            min="0" max="5"
            {...register('rating', { required: true })}
            id="rating"
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block font-medium mb-2">
            Available Quantity:
          </label>
          <input
            type="number"
            {...register('quantity', { required: true })}
            id="quantity"
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2">
            Detail Description:
          </label>
          <textarea
            {...register('description', { required: true })}
            id="description"
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            rows="4"
          />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form >
    </div >
  );
};

export default AddToys;