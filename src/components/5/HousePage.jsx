import React, { useState } from 'react';
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { loadStripe } from "@stripe/stripe-js";
import { PAYMENT_SUCCESS, PAYMENT_DECLINE } from "../../constants";
import {MapContainer, TileLayer,} from 'react-leaflet';
import GeoCoderMarker from "../1/MapMarker";

const images = [
  "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/03/Mexicali-1-1024x686.jpg",
  "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/03/006_Open2view_ID784672-4_Mexicali_Court-1024x684.jpg",
  "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/03/005_Open2view_ID784672-4_Mexicali_Court-1024x684.jpg",
  "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/03/007_Open2view_ID784672-4_Mexicali_Court-1024x684.jpg",
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
    successUrl: `${window.location.origin}${PAYMENT_SUCCESS}`,
    cancelUrl: `${window.location.origin}${PAYMENT_DECLINE}`
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
          <div className="relative aspect-w-1 aspect-h-1 rounded-lg bg-gray-800 overflow-hidden">
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
            <h1 className="text-3xl font-extrabold tracking-tight">Premium Wireless Headphones</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-200">$299.99</p>
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
                Experience unparalleled sound quality with our Premium Wireless Headphones. 
                Featuring advanced noise-cancellation technology and long-lasting battery life, 
                these headphones are perfect for music enthusiasts and professionals alike.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-200">Highlights</h3>
              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc space-y-2">
                  <li className="text-sm text-gray-300">40 hours of battery life</li>
                  <li className="text-sm text-gray-300">Active Noise Cancellation</li>
                  <li className="text-sm text-gray-300">Bluetooth 5.0 connectivity</li>
                  <li className="text-sm text-gray-300">High-fidelity sound with aptX codec</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-200">In the box</h3>
              <div className="mt-4 space-y-2">
                {['Headphones', 'Carrying case', 'USB-C charging cable', '3.5mm audio cable'].map((item) => (
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
                Place a Deposit 
              </button>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ProductPage;