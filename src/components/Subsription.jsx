import React from 'react';

// Sample subscription data
const sampleSubscriptions = [
  { id: 1, name: 'Basic Plan', price: 9.99, renewalDate: '2023-12-01', status: 'Active' },
  { id: 2, name: 'Premium Plan', price: 19.99, renewalDate: '2024-01-15', status: 'Active' },
  { id: 3, name: 'Property Alerts', price: 4.99, renewalDate: '2023-11-30', status: 'Cancelled' },
];

export default function Subscriptions() {
  return (
    <div className="bg-black text-white min-h-screen p-6 px-6 mr-9">
      <div className="space-y-6">
        {sampleSubscriptions.map((subscription) => (
          <div key={subscription.id} className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-0.5   rounded-lg">
            <div className="relative bg-gray-900 rounded-lg p-6 m-[2px]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{subscription.name}</h3>
                  <p className="text-gray-400">Price: ${subscription.price.toFixed(2)}/month</p>
                  <p className="text-gray-400">Renewal Date: {subscription.renewalDate}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  subscription.status === 'Active' ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'
                }`}>
                  {subscription.status}
                </span>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
               
              
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}