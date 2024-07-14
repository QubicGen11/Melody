// src/app/dashboard/Cards.js
'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios'; // Import Axios for making API requests
import { useRouter } from 'next/navigation'; // Import useRouter for routing
import '../globals.css';
import './cards.css'; // Import the CSS file for the cards

const Cards = () => {
  const [cards, setCards] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/house/houses');
        setCards(response.data); // Assuming response.data is an array of house objects
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  // Function to handle card click and navigate to single page
  const handleCardClick = (id) => {
    router.push(`/house/${id}`); // Assuming you have a route like `/house/[id]` for dynamic routing
  };

  return (
    <div>
      <Head>
        <title>Recently Uploaded Rental Posts</title>
      </Head>
      <main className="main-content p-6 bg-red-50 min-h-screen">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Recently Uploaded <span className="text-black">Rental</span> posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-0 p-5" style={{ justifyItems: 'center' }}>
          {cards.map((card) => (
            <div key={card.id} className="card bg-white rounded-lg shadow-md xl:w-10/12 hover:shadow-2xl transition-transform transform hover:scale-105 fade-in-up" onClick={() => handleCardClick(card.id)}>
              <div className="image-container">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-32 object-cover rounded-t-lg card-image"
                />
              </div>
              <div className="p-2">
                <p className="text-xs">{card.title}</p>
                <p className="text-xs text-gray-500">
                  <span className="text-red-600">📍</span> {card.address.city}, {card.address.state}{' '} {/* Fixed to access nested properties correctly */}
                  <span className="float-right">Rental Type: {card.rentalType}</span>
                </p>
                <p className="text-green-600 font-bold">Price: {card.price}</p>
                <p className="text-xs text-gray-500">Room: {card.room}</p>
                <p className="text-xs text-gray-500">Available from: {card.availableFrom}</p>
                <p className="text-xs text-gray-500">Gender: {card.gender}</p>
                <p className="text-xs text-gray-500">Ad type: {card.adType}</p>
                <p className="text-xs text-gray-500">Posted by: {card.postedBy}</p>
                <button className="bg-red-600 text-white px-2 py-1 rounded-lg mt-2 text-xs hover:bg-red-600 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 ">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Cards;
