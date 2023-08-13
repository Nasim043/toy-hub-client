import { useEffect, useState } from "react";
import SingleToys from "./SingleToys";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle('All Toys')
  const [text, setText] = useState('');
  const [toys, setToys] = useState([]);
  const [toyLoading, setToyLoading] = useState(true);

  const handleSearchText = () => {
    fetch(`https://b7a11-toy-marketplace-server-side-nasim043.vercel.app/getToyByName/${text}`)
      .then(res => res.json()
        .then(data => setToys(data)))
  }

  useEffect(() => {
    fetch('https://b7a11-toy-marketplace-server-side-nasim043.vercel.app/toys')
      .then(res => res.json()
        .then(data => {
          setToyLoading(false);
          setToys(data)
        }))
  }, [])

  return (
    <>
      {
        toyLoading && <div className="flex justify-center items-center h-screen">
          <div className="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-purple-500 border-t-transparent"></div>
        </div>
      }
      <div className="overflow-x-auto my-container">
        <div className="flex flex-col justify-center items-center mb-7">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text mb-4">Explore All Toys</h2>
          <p className="text-gray-400 text-base sm:text-lg text-center">From Classic Roadsters to Modern Racers, Uncover a World of Toy Car Excitement</p>
        </div>
        <div className="form-control flex justify-end items-center mb-3">
          <div className="input-group justify-end">
            <input type="text" placeholder="Search…" className="input input-bordered" onChange={(e) => setText(e.target.value)} />
            <button className="btn btn-square" onClick={handleSearchText}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th className="text-center">Available Quantity</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>

            {
              toys && toys.map(toy => <SingleToys key={toy._id} toy={toy}></SingleToys>)
            }
          </tbody>
        </table>
      </div >
    </>
  );
};

export default AllToys;