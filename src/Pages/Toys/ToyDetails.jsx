import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
  const toy = useLoaderData()

  return (
    <div className='my-container'>
      <div className="card w-11/12 md:w-2/3 bg-base-100 shadow-xl mx-auto mb-10">
        <figure>
          <img src={toy?.pictureUrl} className='rounded-lg mt-4' alt={toy?.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy?.name}</h2>
          <p><span className='font-semibold'>Seller Name:</span> {toy?.sellerName}</p>
          <p><span className='font-semibold'>Seller email:</span> {toy?.sellerEmail}</p>
          <p><span className='font-semibold'>Subcategory:</span> {toy?.subcategory}</p>
          <p><span className='font-semibold'> Price:</span> &#36;{toy?.price}</p>
          <p><span className='font-semibold'>Available Quantity:</span> {toy?.quantity}</p>
          <div className='flex items-center'><span className='font-semibold me-2'>Rating:</span>
            <Rating
              style={{ maxWidth: 80 }}
              readOnly
              orientation="horizontal"
              value={toy?.rating}
            />
           </div>
          <p>{toy?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;