import { useEffect, useState } from "react";
import SingleToys from "./SingleToys";

const AllToys = () => {
  // https://b7a11-toy-marketplace-server-side-nasim043.vercel.app/
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then(res => res.json()
        .then(data => setToys(data)))
  }, [])

  return (
    <div className="overflow-x-auto my-container">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {
            toys && toys.map(toy => <SingleToys key={toy._id} toy={toy}></SingleToys>)
          }
        </tbody>
      </table>
    </div >
  );
};

export default AllToys;