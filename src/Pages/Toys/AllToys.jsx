import { useEffect, useState } from "react";
import SingleToys from "./SingleToys";

const AllToys = () => {
  // https://b7a11-toy-marketplace-server-side-nasim043.vercel.app/
  const [text, setText] = useState('');
  const [toys, setToys] = useState([]);

  const handleSearchText = () => {
    fetch(`http://localhost:5000/getToyByName/${text}`)
      .then(res => res.json()
        .then(data => setToys(data)))
  }

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then(res => res.json()
        .then(data => setToys(data)))
  }, [])

  return (
    <div className="overflow-x-auto my-container">
      <div className="form-control flex justify-end items-center mb-3">
        <div className="input-group justify-end">
          <input type="text" placeholder="Search…" className="input input-bordered" onChange={(e) => setText(e.target.value)} />
          <button className="btn btn-square" onClick={handleSearchText}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
      <table className="table w-full">
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