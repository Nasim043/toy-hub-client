import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularToy = () => {
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/getPopularToys')
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])

  return (
    <div className="mb-12 mt-14">
      <div className="flex flex-col justify-center items-center mb-7">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text mb-4">Popular Toys</h2>
        <p className="text-gray-400 text-base sm:text-lg text-center">Discover the joy of play with our selection of popular toys in the marketplace</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {toys.map((toy) => (
          <div
            key={toy._id}
            className="bg-white rounded-lg shadow-lg flex flex-col justify-between"
          >
            <img
              src={toy.pictureUrl}
              alt={toy.name}
              className="sm:h-64 w-full object-cover rounded-t-lg"
            />
            <div className="space-y-5 p-2">
              <h3 className="text-lg font-semibold">{toy.name}</h3>
              <p className="text-gray-500">Price: {toy.price}</p>
              <div className="text-gray-500 flex items-center">
                <span className="me-3">Rating:</span>
                <Rating
                  style={{ maxWidth: 70 }}
                  readOnly
                  orientation="horizontal"
                  value={toy.rating}
                />
              </div>
            </div>
            <Link className="flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 font-semibold text-white py-2 px-4 rounded-b-lg focus:outline-none" to={`/details/${toy._id}`}>
              <FaRegEye className='me-2'></FaRegEye>View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularToy;