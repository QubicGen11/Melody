// src/app/dashboard/Cards.js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router'; // Corrected import
import '../globals.css';
import './cards.css';

const FeaturedCards = () => {
  const [houses, setHouses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchNearbyHouses = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/house/houses/near', {
          params: {
            latitude: 'your_latitude_here', // Replace with actual latitude (e.g., from user's location)
            longitude: 'your_longitude_here', // Replace with actual longitude
            distance: 10000 // Replace with desired distance in meters
          }
        });
        setHouses(data); // Assuming response.data is an array of house objects
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchNearbyHouses();
  }, []);

  const handleCardClick = (id) => {
    router.push(`/house/${id}`);
  };

  return (
    <div>
      <Head>
        <title>Houses near you!</title>
      </Head>
      <main className="main-content p-6 bg-red-50 min-h-screen">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Recently Uploaded <span className="text-black">Rental</span> posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-0 p-5" style={{ justifyItems: 'center' }}>
          {houses.map((house) => (
            <div key={house._id} className="card bg-white rounded-lg shadow-md xl:w-10/12 hover:shadow-2xl transition-transform transform hover:scale-105 fade-in-up" onClick={() => handleCardClick(house._id)}>
              <div className="image-container">
                <img
                  src={house.imageUrl} // Assuming `imageUrl` is provided in the API response
                  alt={house.title}
                  className="w-full h-32 object-cover rounded-t-lg card-image"
                />
              </div>
              <div className="p-2">
                <p className="text-xs">{house.title}</p>
                <p className="text-xs text-gray-500">
                  <span className="text-red-600">📍</span> {house.address.city}, {house.address.state}{' '}
                  <span className="float-right">Rental Type: {house.rentalType}</span>
                </p>
                <p className="text-green-600 font-bold">Price: ${house.price}/month</p>
                <p className="text-xs text-gray-500">House Type: {house.houseType}</p>
                <p className="text-xs text-gray-500">Available from: {new Date(house.availableFrom).toLocaleDateString()}</p>
                <p className="text-xs text-gray-500">Lease Type: {house.leaseType}</p>
                <p className="text-xs text-gray-500">Ad type: {house.adType}</p>
                <p className="text-xs text-gray-500">Posted by: {house.postedBy}</p>
                <button className="bg-red-600 text-white px-2 py-1 rounded-lg mt-2 text-xs hover:bg-red-600 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110">
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

export default FeaturedCards;
