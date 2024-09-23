

export default function Success() {
  return (
    <div className="mt-20   flex items-center justify-center p-4">
      <div className=" rounded-lg shadow-md w-full max-w-md overflow-hidden">
        <div className="text-center p-6 bg-green-500">
          <svg className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-white">Payment Successful!</h2>
        </div>
        <div className="p-6">
          <p className="text-center text-white mb-8">
            Thank you for your purchase. Your Deposit has been processed successfully.
          </p>
          <div className=" p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-lg mb-2">Order Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white">Invoice Number:</span>
                <span className="font-medium">{Math.floor(Math.random() * 100000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Total Amount:</span>
                <span className="font-medium">$200</span>
              </div>
            </div>
          </div>
         
            <button href="/" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Return to Home
            </button>
            <button href="/" className=" mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Download Invoice  
            </button>
       
        </div>
      </div>
    </div>
  )
}