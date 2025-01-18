import React from "react";

const Askexpert = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#253068] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Ask the Experts</h1>
        <p className="text-lg">
          Got questions about your beauty routine? Our experts are here to help! Submit your query, and we'll provide tailored advice.
        </p>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Submit Your Query</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#253068]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#253068]"
              />
            </div>
            <div>
              <label htmlFor="query" className="block text-lg font-semibold mb-2">
                Your Question
              </label>
              <textarea
                id="query"
                placeholder="Write your question here..."
                rows="4"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#253068]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#253068] text-white py-3 rounded-lg font-semibold hover:bg-[#1e2556] transition"
            >
              Submit Query
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">How do I choose the right product for my skin type?</h3>
              <p className="text-gray-600 mt-2">
                Our experts recommend selecting products based on your skin type—dry, oily, combination, or sensitive. You can ask us for personalized advice.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Are the products suitable for all hair types?</h3>
              <p className="text-gray-600 mt-2">
                Yes, our hair care range is designed for a variety of hair types. Check the product description for specific suitability.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Can I get a consultation before purchasing?</h3>
              <p className="text-gray-600 mt-2">
                Absolutely! Use the form above to ask your questions, and our team will guide you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Askexpert;
