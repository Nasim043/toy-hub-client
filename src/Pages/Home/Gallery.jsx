import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"

const Gallery = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('gallery.json')
      .then(res => res.json())
      .then(data => setImages(data))
  }, [])

  return (
    <div className="my-container mx-auto px-5 py-3 lg:px-10 lg:pt-12 my-12" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex flex-col justify-center items-center mb-7">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text mb-4">Toy Gallery</h2>
        <p className="text-gray-400 text-base sm:text-lg text-center">Browse our captivating gallery showcasing an array of delightful toys and playtime moments.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          images?.map(({ id, image }) => (
            <motion.div whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
              whileTap={{ scale: 0.9 }} className="w-full p-1 md:p-2" key={id}>
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={image} />
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default Gallery;