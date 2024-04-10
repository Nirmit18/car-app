import React from 'react';

function MyCar() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col lg:flex-row"> 
          <img className="h-80 lg:w-1/2 lg:h-auto mb-4 lg:mb-0" src="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80" alt="Car" />
          <div className="lg:ml-8"> 
            <h1 className="text-3xl font-bold mb-4">SUZUKI FRONX</h1>
            <ul className="text-lg text-gray-700"> 
              <li className="mb-2"><span className="font-semibold">Features:</span></li>
              <li className="mb-2"><span role="img" aria-label="door">🚪</span> 4 doors</li>
              <li className="mb-2"><span role="img" aria-label="gear">⚙️</span> Manual gear</li>
              <li className="mb-2"><span role="img" aria-label="airbag">💨</span> Dual airbag</li>
            </ul>
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCar;
