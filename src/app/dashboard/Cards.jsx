'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Corrected import
import Cookies from 'js-cookie';
import Link from 'next/link'; // Added import for Link
import '../globals.css';
import './cards.css';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const router = useRouter();
  const email = Cookies.get('userEmail');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/house/houses');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleBookmarkClick = async (userId, houseId) => {
    try {
      await axios.post(`http://localhost:4000/api/user/${userId}/bookmarks/${houseId}`);
      // Optionally, you can update the UI to reflect the bookmarked state
      console.log('Bookmark added successfully');
    } catch (error) {
      console.error('Error adding bookmark:', error.message);
    }
  };

  const handleCardClick = (id) => {
    router.push(`/flatdetails/${id}`); // Navigate programmatically
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
            <div key={card._id} className="card bg-white mt-4 rounded-lg shadow-md xl:w-10/12 hover:shadow-2xl transition-transform transform hover:scale-105 fade-in-up" onClick={() => handleCardClick(card._id)}>
              <div className="image-container">
                {card.image ? (
                  <img
                    src={`data:image/jpeg;base64,${card.image}`}
                    alt={card.title}
                    className="w-full h-32 object-cover rounded-t-lg card-image"
                  />
                ) : (
                  <div className="w-full h-32 flex items-center justify-center bg-gray-200 rounded-t-lg">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-2">
                <Link href={`/flatdetails/${card._id}`}>
                  {card.title}
                </Link>
                <p className="text-xs text-gray-500">
                  <span className="text-red-600">📍</span> {card.address.city}, {card.address.state}{' '}
                  <span className="float-right">Rental Type: {card.rentalType}</span>
                </p>
                <p className="text-green-600 font-bold">Price: {card.price}</p>
                <p className="text-xs text-gray-500">Room: {card.room}</p>
                <p className="text-xs text-gray-500">Available from: {card.availableFrom}</p>
                <p className="text-xs text-gray-500">Gender: {card.preferredGender}</p>
                <p className="text-xs text-gray-500">Ad type: {card.adType}</p>
                <p className="text-xs text-gray-500">Posted by: {card.ownerName}</p>
                <div className="actions flex gap-2">
                  <button className="bg-red-600 text-white px-2 py-2 rounded-lg mt-2 text-xs hover:bg-red-600 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110">
                    Contact
                  </button>
                  <button className='px-2 py-2 mt-2 rounded-lg bg-gray-300' onClick={() => handleBookmarkClick(email, card._id)}>
                    Bookmark
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Cards;