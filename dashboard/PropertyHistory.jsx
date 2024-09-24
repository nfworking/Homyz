import React from 'react';

// Sample property view history data
const samplePropertyViews = [
  { id: 1, address: '123 Main St, Anytown, USA', viewDate: '2023-06-15', price: 350000, type: 'House' },
  { id: 2, address: '456 Elm St, Somewhere, USA', viewDate: '2023-06-14', price: 225000, type: 'Apartment' },
  { id: 3, address: '789 Oak Ave, Nowhere, USA', viewDate: '2023-06-12', price: 500000, type: 'Condo' },
  { id: 4, address: '101 Pine Rd, Elsewhere, USA', viewDate: '2023-06-10', price: 175000, type: 'Townhouse' },
  { id: 5, address: '202 Maple Ln, Anyplace, USA', viewDate: '2023-06-08', price: 400000, type: 'House' },
];

export default function PropertyViewHistory() {
  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">Property View History</h2>
      <div className="space-y-4">
        {samplePropertyViews.map((property) => (
          <div key={property.id} className="bg-gray-900 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{property.address}</h3>
                <p className="text-sm text-gray-400">Viewed on: {property.viewDate}</p>
              </div>
              <span className="bg-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
                {property.type}
              </span>
            </div>
            <p className="mt-2 text-green-400 font-medium">
              ${property.price.toLocaleString()}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition duration-300 ease-in-out">
                View Details
              </button>
              <button className="text-gray-400 hover:text-white text-sm transition duration-300 ease-in-out">
                Remove from History
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md text-sm transition duration-300 ease-in-out">
          Load More
        </button>
      </div>
    </div>
  );
}