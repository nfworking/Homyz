import React from 'react';

const sampleSubscriptions = [
    { id: 1, name: 'Basic Plan', price: 9.99, renewalDate: '2023-12-01', status: 'Active' },
    { id: 2, name: 'Premium Plan', price: 19.99, renewalDate: '2024-01-15', status: 'Active' },
    { id: 3, name: 'Property Alerts', price: 4.99, renewalDate: '2023-11-30', status: 'Cancelled' },
  ];
  
  export default function Subscriptions() {
    return (
      <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
        <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>Your Subscriptions</h2>
        {sampleSubscriptions.map((subscription) => (
          <div key={subscription.id} style={{ 
            backgroundColor: '#111', 
            margin: '10px 0', 
            padding: '15px', 
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ margin: '0 0 10px 0' }}>{subscription.name}</h3>
              <p style={{ margin: '5px 0', color: '#aaa' }}>Price: ${subscription.price.toFixed(2)}/month</p>
              <p style={{ margin: '5px 0', color: '#aaa' }}>Renewal Date: {subscription.renewalDate}</p>
            </div>
            <div>
              <span style={{ 
                backgroundColor: subscription.status === 'Active' ? 'green' : 'red',
                padding: '5px 10px',
                borderRadius: '15px',
                fontSize: '0.8em'
              }}>
                {subscription.status}
              </span>
            </div>
          </div>
        ))}
        <button style={{
          backgroundColor: '#0066cc',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          Manage Subscriptions
        </button>
      </div>
    );
  }