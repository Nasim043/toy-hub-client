import { Rating } from '@smastrom/react-rating';
import { useEffect, useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoryTab = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("racing-car");

  const handleCategory = (tabValue) => {
    setCategory(tabValue);
  }

  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-nasim043.vercel.app/getToysByCategory/${category}`)
      .then(res => res.json())
      .then(data => setToys(data))
  }, [category])
  return (
    <div className='my-container mb-12'>
      <div className="flex flex-col justify-center items-center mb-7">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text mb-4">Shop by category</h2>
        <p className="text-gray-400 text-base sm:text-lg text-center">Explore our extensive collection of toys categorized by themes and interests, making it easy to find the perfect playtime companions</p>
      </div>
      <div className="tabs flex justify-center mb-5">
        <a className={`tab tab-lifted ${category === "racing-car" ? "tab-active text-purple-600" : ""}`} onClick={() => handleCategory("racing-car")}>Racing Car</a>
        <a className={`tab tab-lifted ${category === "police-car" ? "tab-active  text-purple-600" : ""}`} onClick={() => handleCategory("police-car")}>Police Car</a>
        <a className={`tab tab-lifted ${category === "truck" ? "tab-active  text-purple-600" : ""}`} onClick={() => handleCategory("truck")}>Truck</a>
      </div>
      <div className='flex justify-center gap-8'>
        {
          toys && toys.map(toy => {
            return <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between" key={toy._id}>
              <img src={toy.pictureUrl} alt="Card Image" className="w-full" />
              <div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{toy.name}</div>
                  <p className="text-gray-500">Price: &#36;{toy.price}</p>
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
                <div className='flex justify-center'>
                  <Link className="btn my-gradient text-white font-semibold px-6 py-3 rounded-md mt-4 capitalize border-0 w-11/12 mx-auto my-5" to={`/details/${toy._id}`}>
                    <FaRegEye className='me-2'></FaRegEye>View Details
                  </Link>
                </div>
              </div>
            </div>
          })
        }

      </div>
    </div>
  );
};

export default CategoryTab;