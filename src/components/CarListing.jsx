// import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const CarListing = ({ car }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4">
      <img src={car.image} alt={car.name} className="w-full mb-2" />
      <h2 className="text-lg font-semibold">{car.name}</h2>
      <p>{car.description}</p>
      <p className="text-gray-600">Price: {car.price}</p>

      <div className='flex items-center gap-5'>
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          BUY NOW
        </button>
        <Link to="/car/1">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            VIEW DETAILS
          </button>
        </Link>
        {car.isNew && <span className="bg-green-500 text-white font-bold py-1 px-2 rounded">#New</span>}
        
      </div>
    </div>
  );
};

export default CarListing;

