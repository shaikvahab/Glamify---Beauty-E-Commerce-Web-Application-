import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {



  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/PaymentPage");
  };

  // Sample data for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Skin Care",
      image: "product1.jpg",
      price: "₹500",
      quantity: 1,
    },

    {
      id: 2,
      name: "Hair Care",
      image: "product2.jpg",
      price: "₹400",
      quantity: 2,
    },
    {
      id: 3,
      name: "Body Care",
      image: "product3.jpg",
      price: "₹300",
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  return (
    <div className="p-6 bg-[#f4f4f7] min-h-screen">
      <h1 className="text-4xl font-bold text-[#253068] text-center mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-md"
            />

            {/* Product Details */}
            <div className="flex-1 px-6">
              <h3 className="text-2xl font-bold text-[#253068]">{item.name}</h3>
              <p className="text-lg text-gray-600">Price: {item.price}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg font-bold text-gray-700">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Proceed to Pay Button */}
      <div className="mt-8">
        <button className="w-full px-6 py-3 bg-[#253068] text-white text-lg font-bold rounded-md hover:bg-[#1f2a4a] transition duration-300" onClick={handleClick}>
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Cart;
