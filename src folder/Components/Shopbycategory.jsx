import React from 'react';
import { useNavigate } from "react-router-dom";


const Shopbycategory = () => {

    const navigate = useNavigate();

    const Productdetails = [
        {
            id: 1,
            name: 'Skin Care',
            image: `product${1}.jpg`, // Adjust the image path accordingly
            description: 'Discover the best skin care products for glowing skin.',

        },
        {
            id: 2,
            name: 'Hair Care',
            image: `product${2}.jpg`, // Adjust the image path accordingly
            description: 'Find the perfect products for healthier hair.',

        },
        {
            id: 3,
            name: 'Body Care',
            image: `product${3}.jpg`, // Adjust the image path accordingly
            description: 'Pamper your body with our luxurious body care products.',

        },
        {
            id: 4,
            name: 'Makeup',
            image: `product${4}.jpg`, // Adjust the image path accordingly
            description: 'Enhance your beauty with our exclusive makeup collection.',

        },
    ];

    const handleShopNow = (id) => {
        navigate(`/Productdetails${id}`); // Navigate to the dynamic route with the product ID
    };

    return (
        <div className="p-6 bg-[#f4f4f7]">
            <h1 className="text-4xl font-bold text-[#253068] text-center mb-8">Shop by Category</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Productdetails.map((product) => (
                    <div
                        key={product.id}
                        className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[250px] object-cover transition-all duration-300 hover:opacity-80"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-bold text-[#253068] mb-2">{product.name}</h3>
                            <p className="text-lg text-gray-600 mb-4">{product.description}</p>

                            <button className="w-full px-6 py-2 bg-[#253068] text-white rounded-md hover:bg-[#1f2a4a] transition duration-300"

                                onClick={() => handleShopNow(product.id)}>
                                Shop Now
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shopbycategory;
