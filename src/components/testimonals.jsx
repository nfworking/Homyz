import React from 'react'

const brands = [
  { name: 'Spotify', logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Reddit', logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Amazon', logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Discord', logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Twitch', logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Twitter', logo: '/placeholder.svg?height=40&width=40', review: 'is this working'  },
]

export default function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden bg-black">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * 6));
          }
        }
      `}</style>
      <div 
        className="flex py-12 animate-scroll"
        style={{
          animation: 'scroll 20s linear infinite',
          width: 'calc(250px * 12)'
        }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <div key={index} className="flex items-center justify-center w-[250px] text-4xl border ">
            <img src={brand.logo} alt={brand.name} className="h-10 w-10" />
            <span className="ml-2 text-white">{brand.name}</span>
            <span className="ml-6 mr-6 text-white">{brand.review}</span>
          </div>
        ))}
      </div>
    </div>
  )
}