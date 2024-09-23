import React, { useState } from 'react';
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { loadStripe } from "@stripe/stripe-js";
import {MapContainer, TileLayer,} from 'react-leaflet';
import GeoCoderMarker from "./MapMarker";


const images = [
  "/casa1.png",
  "/casa2.png",
  "/casa3.png",
  "/casa4.png",

];

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  }

  return stripePromise;
};

const ProductPage = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: import.meta.env.VITE_PRODUCT_ID,
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}${import.meta.env.VITE_SUCCESS_URL}`,
    cancelUrl: `${window.location.origin}${import.meta.env.VITE_CANCEL_URL}`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);




  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mt-24 bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Product Image Slider */}
          <div className="relative aspect-w-1 aspect-h-1 rounded-lg  overflow-hidden">
            <img
              src={images[currentImage]}
              alt={`Product image ${currentImage + 1}`}
              className="w-full h-full object-center object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImage ? 'bg-white' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            <h1 className='text-3xl mt-10 flex justify-center items-center bg-black tracking-wider'>The Location</h1>
            <div className='bg-black'>
            <MapContainer
        center={[-28.0206097, 153.415578]}
        zoom={9}
        scrollWheelZoom={true}
        className='h-[40vh] w-[100%] rounded-2% bg-black mt-8 '
       
        >
            <TileLayer className='mt-8' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
           <GeoCoderMarker address={'${address} ${city} ${country}'} />
           
          </MapContainer>
          </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight">Casa Mexicali</h1>
            <div className="mt-3">
              
              <p className="text-3xl text-gray-200">$299,000,00</p>
            </div>

            {/* Rating */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`${
                        rating < 4 ? 'text-yellow-400' : 'text-gray-600'
                      } h-5 w-5 flex-shrink-0`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <a href="#" className="ml-3 text-sm font-medium text-indigo-400 hover:text-indigo-300">
                  117 reviews
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-300">
               
            Casa Mexicali is a stunning luxury beachfront house that offers breathtaking ocean views and direct access 
            to pristine sandy shores. With its modern design, spacious living areas, and high-end amenities, the home provides an idyllic retreat for 
            relaxation and entertainment. Guests can enjoy outdoor living spaces, including an infinity pool and a beautifully landscaped garden. 
            This exquisite property embodies the perfect blend of comfort and elegance, making it a premier destination for those seeking a serene escape.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-200">Highlights</h3>
              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc space-y-2">
                  <li className="text-sm text-gray-300">Breathtaking ocean views from every room</li>
                  <li className="text-sm text-gray-300">Infinity pool overlooking the beach</li>
                  <li className="text-sm text-gray-300">Spacious outdoor living areas for relaxation and entertainment</li>
                  <li className="text-sm text-gray-300">Modern design with high-end amenities throughout</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-200">When you buy this house:</h3>
              <div className="mt-4 space-y-2">
                {['Fully furnished with upscale furniture and decor', 'State-of-the-art kitchen appliances', 'Smart home technology for enhanced convenience', 'Beach gear and outdoor equipment included'].map((item) => (
                  <div key={item} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500" aria-hidden="true" />
                    <p className="ml-3 text-sm text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col space-y-4">
              <button
                type="button"
                onClick={redirectToCheckout}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-150 ease-in-out"
              >
                Place a Deposit Now!
              </button>
              
          


            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ProductPage;