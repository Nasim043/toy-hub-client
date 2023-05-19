import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
  const toy = useLoaderData()

  return (
    <div className='my-container'>
      <div className="card w-11/12 md:w-2/3 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={toy?.pictureUrl} className='rounded-lg mt-4' alt={toy?.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy?.sellerName}</h2>
          <p>{toy?.sellerEmail}</p>
          <p>{toy?.name}</p>
          <p>{toy?.subcategory}</p>
          <p>{toy?.price}</p>
          <p>{toy?.quantity}</p>
          <p>{toy?.rating}</p>
          <p>{toy?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;