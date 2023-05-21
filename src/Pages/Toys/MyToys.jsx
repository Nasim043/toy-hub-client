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

  const handleSorting = () => {
    setSortByAsc(!sortByAsc);
    fetch(`http://localhost:5000/getSortedToysByEmail/${user?.email}?sortBy=${sortByAsc}`)
      .then(res => res.json())
      .then(data => setMyToys(data))
  }

  useEffect(() => {
    fetch(`http://localhost:5000/getToysByEmail/${user?.email}`)
      .then(res => res.json())
      .then(data => setMyToys(data))
  }, [user, control])

  return (
    <div className="overflow-x-auto my-container">
      <table className="table table-zebra w-full">
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
  );
};

export default MyToys;