import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#253068] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          At Glamify, we are passionate about providing high-quality beauty products to enhance your skin, hair, and body care routines. 
        </p>
      </section>

      {/* Mission and Values */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-4">
            To empower individuals with premium, sustainable, and effective beauty products that celebrate and enhance natural beauty.
          </p>
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Quality and Excellence</li>
            <li>Sustainability and Responsibility</li>
            <li>Customer-Centric Approach</li>
            <li>Inclusivity and Diversity</li>
          </ul>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="border shadow-md p-4 rounded-lg hover:shadow-lg transition">
              <img
                src="/product1.jpg"
                alt="Product 1"
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Skin Care</h3>
              <p className="text-gray-600 mt-2">
                Rejuvenate your skin with our premium range of skincare products, enriched with natural ingredients for glowing results.
              </p>
            </div>

            {/* Product 2 */}
            <div className="border shadow-md p-4 rounded-lg hover:shadow-lg transition">
              <img
                src="/product2.jpg"
                alt="Product 2"
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Hair Care</h3>
              <p className="text-gray-600 mt-2">
                Revitalize your hair with our nourishing products, designed to strengthen and add shine to every strand.
              </p>
            </div>

            {/* Product 3 */}
            <div className="border shadow-md p-4 rounded-lg hover:shadow-lg transition">
              <img
                src="/product3.jpg"
                alt="Product 3"
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Body Care</h3>
              <p className="text-gray-600 mt-2">
                Pamper your body with our luxurious range of body care products for soft and hydrated skin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
