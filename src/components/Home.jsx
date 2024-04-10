
import React from 'react';
import CarListing from './CarListing';
import cars from '../cars';




const Home = (props) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4"> LATEST CARS </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <CarListing key={car.id} car={car} />
        ))}
        
      </div>
    </div>
    
  );
};

export default Home;

