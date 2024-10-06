import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    content: "This product has revolutionized our workflow. Highly recommended!",
    avatar: "/placeholder.svg?height=80&width=80"
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Marketing Director, InnovateCo",
    content: "Incredible customer service and a game-changing platform. Love it!",
    avatar: "/placeholder.svg?height=80&width=80"
  },
  {
    id: 3,
    name: "Carol Williams",
    role: "Freelance Designer",
    content: "As a freelancer, this tool has saved me countless hours. It's a must-have!",
    avatar: "/placeholder.svg?height=80&width=80"
  }
];

export default function ImprovedTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-16 bg-black mt-20">
      <div className="relative bg-black rounded-xl shadow-lg p-8 md:p-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-teal-400"></div>
        
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={testimonials[currentIndex].avatar}
            alt={testimonials[currentIndex].name}
            className="w-40 h-40 md:w-24 md:h-24 rounded-full border-4 border-blue-200 mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <p className="text-white md:text-xl italic mb-4 text-3xl">{testimonials[currentIndex].content}</p>
            <h3 className="font-semibold text-lg md:text-xl text-gray-800">{testimonials[currentIndex].name}</h3>
            <p className="text-white font-medium">{testimonials[currentIndex].role}</p>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none transition duration-300 ease-in-out"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none transition duration-300 ease-in-out"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}