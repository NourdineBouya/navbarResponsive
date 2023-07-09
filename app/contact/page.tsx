import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md px-8 py-6 rounded-lg ">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
            <textarea
              id="message"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
   

export default Contact