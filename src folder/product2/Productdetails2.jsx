import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Productdetails2 = () => {
  const { id } = useParams(); // Dynamic route parameter for product ID
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Cart");  // Navigate to the homepage when clicking on the logo
  };

  // Simulated product data (replace with API or state data)
  const product = {
    id,
    image: `product${2}.jpg`, // Replace with actual image path
    title: `Product ${2}`,
    description:
      "This is a detailed description of the product. It provides all the necessary information a user needs before making a purchase. The product is designed to suit your needs and provide utmost satisfaction.",
  };

  const [quantity, setQuantity] = useState(1);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-12 bg-[#f4f4f7] min-h-screen">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Product Image */}
        <div className="w-full md:w-1/2 h-[70vh] mb-6 md:mb-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 px-12">
          <h1 className="text-4xl font-bold mb-4 text-[#253068]">
            {product.title}
          </h1>

          <p className="text-gray-700 mb-4">
            {expanded
              ? product.description
              : `${product.description.slice(0, 100)}...`}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#253068] underline"
          >
            {expanded ? "View Less" : "View More"}
          </button>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center">
            <label htmlFor="quantity" className="mr-4 text-gray-700">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, e.target.value))}
              className="w-16 border border-gray-300 rounded text-center"
              min="1"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex gap-4">
            <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300" onClick={handleClick}  >
              Add to Cart
            </button>
            <button className="px-6 py-2 bg-[#253068] text-white rounded-md hover:bg-[#1f2a4a] transition duration-300" onClick={handleClick}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails2;
