'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../globals.css';
import './cards.css';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  const email = Cookies.get('userEmail');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/house/houses');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError('Error fetching data');
      }
    };

    const fetchBookmarks = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/user/${email}/bookmarks`);
        setBookmarks(response.data);
      } catch (error) {
        console.error('Error fetching bookmarks:', error.message);
      }
    };

    fetchData();
    fetchBookmarks();
  }, [email]);

  const handleBookmarkClick = async (userEmail, houseId) => {
    try {
      await axios.post(`http://localhost:4000/api/user/${userEmail}/bookmarks/${houseId}`);
      toast.success('Bookmark saved');
      setBookmarks([...bookmarks, { _id: houseId }]); // Update the bookmarks state
    } catch (error) {
      console.error('Error adding bookmark:', error.message);
      toast.error('Error saving bookmark');
    }
  };

  const handleRemoveBookmarkClick = async (userEmail, houseId) => {
    try {
      await axios.delete(`http://localhost:4000/api/user/${userEmail}/bookmarks/${houseId}`);
      toast.success('Bookmark removed');
      setBookmarks(bookmarks.filter(bookmark => bookmark._id !== houseId)); // Update the bookmarks state
    } catch (error) {
      console.error('Error removing bookmark:', error.message);
      toast.error('Error removing bookmark');
    }
  };

  const handleCardClick = (id) => {
    router.push(`/house/${id}`); // Navigate programmatically
  };

  const isBookmarked = (houseId) => {
    return bookmarks.some((bookmark) => bookmark._id === houseId);
  };

  return (
    <div>
      <ToastContainer />
      <Head>
        <title>Recently Uploaded Rental Posts</title>
      </Head>
      <main className="main-content p-6 bg-red-50 min-h-screen">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Recently Uploaded <span className="text-black">Rental</span> posts
        </h1>
        {error && <p className="text-red-500">{error}</p>}
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
                <Link href={`/house/${card._id}`}>
                  <p className="text-blue-500 hover:underline">{card.title}</p>
                </Link>
                <p className="text-xs text-gray-500">
                  <span className="text-red-600">📍</span> {card.address.city}, {card.address.state}{' '}
                  <span className="float-right">Rental Type: {card.rentalType}</span>
                </p>
                <p className="text-green-600 font-bold">Price: {card.price}</p>
                <p className="text-xs text-gray-500">Room: {card.houseType}</p>
                <p className="text-xs text-gray-500">Available from: {card.availableFrom.split('T')[0]}</p>
                <p className="text-xs text-gray-500">Gender: Any</p>
                <p className="text-xs text-gray-500">Ad type: {card.adType}</p>
                <p className="text-xs text-gray-500">Posted by: {card.ownerName}</p>
                <div className="actions flex gap-2">
                  <button className="bg-red-600 text-white px-2 py-1 rounded-lg mt-2 text-xs hover:bg-red-600 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110">
                    Contact
                  </button>
                  {isBookmarked(card._id) ? (
                    <button
                      title="Remove"
                      className="cursor-pointer flex items-center fill-red-400 bg-red-950 hover:bg-red-900 active:border active:border-red-400 rounded-md duration-100 p-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveBookmarkClick(email, card._id);
                      }}
                    >
                      <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
                    </button>
                  ) : (
                    <button
                      title="Save"
                      className="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookmarkClick(email, card._id);
                      }}
                    >
                      <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
                    </button>
                  )}
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