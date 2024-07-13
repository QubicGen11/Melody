// src/app/dashboard/Cards.js
'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import '../globals.css';
import './cards.css'; // Import the CSS file for the cards

const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Looking for roommate in 1b1b near Disney spring, celebration Florida',
      location: 'Kissimmee, Florida',
      rentalType: 'Room',
      price: '$920/month',
      room: 'Single room',
      availableFrom: '10 July 2024',
      gender: 'Any',
      adType: 'Offered',
      postedBy: 'Raj on 07-09-2024',
      imageUrl: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1720884119/house_one_hlqjli.jpg',
    },
    {
      id: 2,
      title: 'Private Room in a 2Bed 2Bath apartment',
      location: 'San Antonio, Texas',
      rentalType: 'Room',
      price: '$900/month',
      room: 'Single room',
      availableFrom: '16 September 2024',
      gender: 'Female',
      adType: 'Offered',
      postedBy: 'Pravallika on 07-09-2024',
      imageUrl: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1720884543/house_two_m3gjiy.jpg',
    },
    {
      id: 3,
      title: 'New York, 3bhk bungalow',
      location: 'Savoy, Massachusetts',
      rentalType: 'Home',
      price: '$150/week',
      room: 'Single family home',
      availableFrom: '3 July 2024',
      leaseType: 'Long term',
      adType: 'Offered',
      postedBy: 'melodymocktail on 06-24-2024',
      imageUrl: 'https://www.home-designing.com/wp-content/uploads/2018/05/stylish-mid-century-style-green-living-room.jpg',
    },
    {
      id: 4,
      title: 'Looking for a female flatmate.',
      location: 'Cincinnati, Ohio',
      rentalType: 'Room',
      price: '$850/month',
      room: 'Single room',
      availableFrom: '20 August 2024',
      gender: 'Female',
      adType: 'Offered',
      postedBy: 'Shreya on 06-24-2024',
      imageUrl: 'https://thumbs.dreamstime.com/b/apartment-building-balconies-photoof-34869405.jpg',
    },
  ]);

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
            <div key={card.id} className="card bg-white rounded-lg shadow-md xl:w-10/12 hover:shadow-2xl transition-transform transform hover:scale-105 fade-in-up">
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
                  <span className="text-red-600">📍</span> {card.location}{' '}
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