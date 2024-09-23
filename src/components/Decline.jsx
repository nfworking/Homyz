

export default function Decline() {
  return (
    <div className="mt-20   flex items-center justify-center p-4">
      <div className=" rounded-lg shadow-md w-full max-w-md overflow-hidden">
        <div className="text-center p-6 bg-red-500">
        <svg className="mx-auto" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="10" stroke-linecap="round" />
  <line x1="90" y1="10" x2="10" y2="90" stroke="black" stroke-width="10" stroke-linecap="round" />
</svg>

          <h2 className="mt-4 text-2xl font-bold text-white">Payment Error!</h2>
        </div>
        <div className="p-6">
          <p className="text-center text-white mb-8">
            Your Purchase had an error, please contact the support team.
          </p>
          <div className=" p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-lg mb-2">Order Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white">Invoice Number:</span>
                <span className="font-medium"> Error Code: {Math.floor(Math.random() * 10)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Total Amount:</span>
                <span className="font-medium">null</span>
              </div>
            </div>
          </div>
         
            <button href="/" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Return to Home
            </button>
            <button onClick={() => console.log(import.meta.env.VITE_STRIPE_PUBLIC_KEY)} className=" mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Log a Support Ticket   
            </button>
       
        </div>
      </div>
    </div>
  )
}