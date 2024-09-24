import React from 'react'
import {  Check } from "lucide-react"

const GradientBorder = ({ children }) => (
  <div className="relative">
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
    <div className="relative bg-black m-[2px] rounded-lg overflow-hidden">
      {children}
    </div>
  </div>
)

export default function Downloads() {
  const downloads = [
    { name: "Windows",  url: "#windows-download" },
    { name: "Mac",  url: "#mac-download" },
  ]

  const propertyNews = [
    { month: "January", content: "Market trends for the new year" },
    { month: "March", content: "Spring property boom" },
    { month: "September", content: "Fall market analysis" },
    { month: "December", content: "Year-end property recap" },
  ]

  const subscriptionTiers = [
    { 
      price: 25, 
      name: "Basic",
      features: ["Current home support", "Monthly market reports", "Access to our under construction properties", "Access to all display properties"]
    },
    { 
      price: 50, 
      name: "Pro",
      features: ["All Basic features", "10 per month property consultations", "Access to 1 couple, 1 week accomodation (contact us for details)"]
    },
    { 
      price: 150, 
      name: "Premium",
      features: ["All Pro features", "24/7 priority support", "Access to 6 week family accomodation (contact us for details)"]
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mt-20 text-center">Download Hub</h1>  

      {/* Download Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8   mt-20 flex justify-center">Download Our App</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {downloads.map((download) => (
            <GradientBorder key={download.name}>
              <a
                href={download.url}
                className="block p-6 hover:bg-gray-900 transition duration-200"
              >
                <div className="flex flex-col items-center">
     
                  <h3 className="text-xl font-bold mb-2">{download.name}</h3>
                  <p className="text-gray-400">Download for {download.name}</p>
                </div>
              </a>
            </GradientBorder>
          ))}
        </div>
      </section>

      {/* Property News Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8  flex justify-center">Property Newsletters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {propertyNews.map((news) => (
            <GradientBorder key={news.month}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{news.month} Property News</h3>
                <p className="text-gray-400">{news.content}</p>
              </div>
            </GradientBorder>
          ))}
        </div>
      </section>

      {/* Subscription Tiers Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 flex justify-center">Subscribe to our services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionTiers.map((tier) => (
            <GradientBorder key={tier.name}>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold mb-4">${tier.price}/monthly</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5    text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
                  Subscribe
                </button>
              </div>
            </GradientBorder>
          ))}
        </div>
      </section>
    </div>
  )
}