import React from "react";

const body = () => {
  const products = [
    {
      id: 1,
      image: "product1.jpg", // Replace with actual image paths
      title: "Radiant Skin Cream",
      description: "Enhance your natural glow with our radiant skin cream, perfect for daily use.",
    },
    {
      id: 2,
      image: "product2.jpg", // Replace with actual image paths
      title: "Silky Hair Serum",
      description: "Nourish and protect your hair with our silky smooth serum for all hair types.",
    },
    {
      id: 3,
      image: "product3.jpg", // Replace with actual image paths
      title: "Body Revitalizing Lotion",
      description: "Keep your skin hydrated and fresh all day with our revitalizing lotion.",
    },
    {
      id: 4,
      image: "product4.jpg", // Replace with actual image paths
      title: "Ultimate Care Set",
      description: "A complete package for your skin, hair, and body care needs.",
    },
  ];

  return (
    <div className="p-6 bg-[#f4f4f7]">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center mb-12`}
        >
          {/* Product Image */}
          <div className="w-full md:w-1/2 h-[60vh] overflow-hidden cursor-pointer group">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover rounded-lg shadow-lg transform group-hover:scale-105 group-hover:translate-y-[-10px] transition duration-300 ease-in-out"
            />
          </div>


          {/* Product Details */}
          <div className="w-full md:w-1/2 p-6 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#253068]">{product.title}</h2>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <button className="px-6 py-2 bg-[#253068] text-white rounded-md transform hover:translate-y-[-5px] hover:bg-[#1f2a4a] transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default body;
