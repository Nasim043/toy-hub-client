import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MySingleToy from "./MySingleToy";
import { FaArrowsAltV } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle('My Toys')
  const { user, control } = useContext(AuthContext)
  const [myToys, setMyToys] = useState([])
  const [sortByAsc, setSortByAsc] = useState(true)
  const [toyLoading, setToyLoading] = useState(true);

  const handleSorting = () => {
    setSortByAsc(!sortByAsc);
    fetch(`https://b7a11-toy-marketplace-server-side-nasim043.vercel.app/getSortedToysByEmail/${user?.email}?sortBy=${sortByAsc}`)
      .then(res => res.json())
      .then(data => setMyToys(data))
  }

  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-nasim043.vercel.app/getToysByEmail/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setToyLoading(false);
        setMyToys(data);
      })
  }, [user, control])

  return (
    <>
      {
        toyLoading && <div className="flex justify-center items-center h-screen">
          <div className="w-12 h-12 rounded-full animate-spin
                  border-4 border-solid border-purple-500 border-t-transparent"></div>
        </div>
      }
      <div className="overflow-x-auto my-container">
        <div className="flex flex-col justify-center items-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text mb-4">Manage Your Toy Collection</h2>
          <p className="text-gray-400 text-base sm:text-lg text-center">Empower Your Toy Experience - Edit, Update, and Delete Your Toy Listings</p>
        </div>
        <table className="table table-zebra w-full my-10">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th className="flex items-center cursor-pointer" onClick={handleSorting}>
                <span>Price</span> <FaArrowsAltV></FaArrowsAltV>
              </th>
              <th className="text-center">Available Quantity</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              myToys && myToys.map(toy => <MySingleToy key={toy._id} toy={toy}></MySingleToy>)
            }
          </tbody>
        </table>
      </div >
    </>
  );
};

export default MyToys;