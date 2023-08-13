import React from 'react';

const NewsletterSubscription = () => {
  return (
    <div className="bg-purple-900 py-16 text-white my-container mt-12 rounded-md" data-aos="fade-left" data-aos-duration="1500">
      <div className="mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center">Subscribe to Our Newsletter</h2>
        <p className="mb-6 md:text-lg lg:text-xl text-center">
          Stay updated with the latest toy trends and receive exclusive discounts straight to your inbox.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-4 md:mb-0 md:mr-4 px-4 py-2 w-full md:w-auto rounded-md bg-white text-gray-800 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md w-full md:w-auto">
            Get Discount
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
