import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const ToyCard = ({ id, image, name, price, rating }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 flex flex-col justify-between">
            <motion.div whileHover={{
                scale: 1.3,
                transition: { duration: 0.5 },
            }}
                whileTap={{ scale: 0.9 }}
            >
                <img src={image} alt={name} className="w-full h-auto mb-4" />
            </motion.div>
            <div>
                <div className="space-y-3 mb-4">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-gray-500">&#36;{price}</p>
                    <div className="text-gray-500 flex items-center">
                        <Rating
                            style={{ maxWidth: 80 }}
                            readOnly
                            orientation="horizontal"
                            value={rating}
                        />
                        <span className="text-yellow-500 font-semibold ml-2">{rating}</span>
                    </div>
                </div>
                <Link className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md block text-center" to={`/details/${id}`}>View Details</Link>
                {/* <div className='flex justify-center'>
                    <Link className="btn my-gradient -mb-2 md:-mb-3 lg:-mb-4 text-white font-semibold px-6 py-3 rounded-md mt-4 capitalize border-0 w-11/12 mx-auto my-5" to={`/details/${id}`}>
                        <FaRegEye className='me-2'></FaRegEye>View Details
                    </Link>
                </div> */}
            </div>
        </div >
    );
};

export default ToyCard;
