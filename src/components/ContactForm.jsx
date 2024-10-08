import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '64ca0c2f-2375-4c52-88ae-8b800d0c0c67', // Replace with your actual access key
          ...formData
        })
      })

      if (response.ok) {
        toast.success('Thank you for your message. We\'ll get back to you soon!', {
          duration: 5000,
          position: 'bottom-center',
          style: {
            background: '#333',
            color: '#fff',
            fontSize: '1.125rem', // Increased font size for toast
          },
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      toast.error('Oops! Something went wrong. Please try again later.', {
        duration: 5000,
        position: 'bottom-center',
        style: {
          background: '#333',
          color: '#fff',
          fontSize: '1.125rem', // Increased font size for toast
        },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen backdrop-blur-lg flex items-center justify-center px-5 sm:px-8 lg:px-10">
      <div className="max-w-xl w-full space-y-10">
        <div>
          <h2 className="mt-8 text-center text-4xl font-extrabold text-white">
            Contact Us
          </h2>
        </div>
        <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px backdrop-blur-lg">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-700 placeholder-gray-500 text-white backdrop-blur-lg rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-700 placeholder-gray-500 text-white backdrop-blur-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-700 placeholder-gray-500 text-white backdrop-blur-lg rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-3 px-5 border border-transparent text-lg font-medium rounded-md text-white backdrop-blur-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  )
}