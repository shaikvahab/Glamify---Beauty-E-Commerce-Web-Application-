import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const PaymentPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Orderplaced");  // Navigate to the homepage when clicking on the logo
    };




  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

//   const handleCheckout = () => {
//     console.log("Shipping Details:", shippingDetails);
//     console.log("Payment Method:", paymentMethod);
//     // Add checkout logic here
//   };

  return (
    <div className="p-6 bg-[#f4f4f7] min-h-screen">
      <h1 className="text-4xl font-bold text-[#253068] text-center mb-6">
        Payment & Shipping
      </h1>

      {/* Shipping Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold text-[#253068] mb-4">Shipping Details</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={shippingDetails.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#253068]"
          />
          <input
            type="text"
            name="address"
            value={shippingDetails.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#253068]"
          />
          <input
            type="text"
            name="city"
            value={shippingDetails.city}
            onChange={handleInputChange}
            placeholder="City"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#253068]"
          />
          <input
            type="text"
            name="state"
            value={shippingDetails.state}
            onChange={handleInputChange}
            placeholder="State"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#253068]"
          />
          <input
            type="text"
            name="zipCode"
            value={shippingDetails.zipCode}
            onChange={handleInputChange}
            placeholder="ZIP Code"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#253068]"
          />
        </form>
      </div>

      {/* Payment Methods */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold text-[#253068] mb-4">Payment Methods</h2>
        <div className="space-y-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="Credit Card"
              checked={paymentMethod === "Credit Card"}
              onChange={handlePaymentChange}
              className="mr-2"
            />
            Credit Card
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="Debit Card"
              checked={paymentMethod === "Debit Card"}
              onChange={handlePaymentChange}
              className="mr-2"
            />
            Debit Card
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="PayPal"
              checked={paymentMethod === "PayPal"}
              onChange={handlePaymentChange}
              className="mr-2"
            />
            UPI
          </label>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="text-center">
        <button
        //   onClick={handleCheckout}
          className="w-full max-w-md px-6 py-3 bg-[#253068] text-white text-lg font-bold rounded-md hover:bg-[#1f2a4a] transition duration-300"
          onClick = {handleClick}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
