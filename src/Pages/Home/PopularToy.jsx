import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-aos="fade-up" data-aos-duration="1500">
          {toys?.map((toy) => (
            <ToyCard
              key={toy._id}
              id={toy._id}
              image={toy.pictureUrl}
              name={toy.name}
              price={toy.price}
              rating={toy.rating}
            />
          ))}
        </div>
    </div>
  );
};

export default PopularToy;