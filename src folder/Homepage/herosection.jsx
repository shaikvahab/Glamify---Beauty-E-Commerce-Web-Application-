import React from "react";
// import { ImGift } from "react-icons/im";
// import heroimage from "./heroimage.jpg"
// import { useNavigate } from "react-router-dom"; 

const herosection = () => {

  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('/heroimage.jpg')`, // Replace with your image path
        
      }}

    >
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold text-center">Welcome to Glamify</h1>
        <p className="text-xl mt-2 text-center">Explore our wide range of beauty products</p>
        <button className="mt-4 px-6 py-2 text-white bg-[#253068] hover:bg-[#1f2a4a] transition duration-300 rounded-md">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default herosection;
