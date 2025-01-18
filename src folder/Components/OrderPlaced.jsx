import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderPlaced = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f4f4f7]">
      {/* Checkmark Icon */}
      <div className="text-green-500 text-8xl mb-6 animate-bounce">
        <FaCheckCircle />
      </div>

      {/* Thank You Note */}
      <h1 className="text-4xl font-bold text-[#253068] mb-4">
        Thank You for Shopping with Us!
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Your order has been placed successfully. We hope to see you again soon!
      </p>

      {/* Go Back Button */}
      <button
        onClick={() => window.location.href = "/"}
        className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default OrderPlaced;
