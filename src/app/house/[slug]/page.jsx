'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, usePathname } from 'next/navigation';
import Head from 'next/head';
import Header from '@/app/dashboard/header';
import Footer from '@/app/dashboard/footer';

const DetailedCardView = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [slug, setSlug] = useState('');
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    if (pathname) {
      const pathParts = pathname.split('/');
      const slugPart = pathParts[pathParts.length - 1];
      setSlug(slugPart);
      console.log(slugPart); // Should correctly log the slug part
    }
  }, [pathname]);

  useEffect(() => {
    if (slug) {
      const fetchHouseDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/api/house/houses/id/${slug}`);
          setCardDetails(response.data);
        } catch (error) {
          console.error('Error fetching house details:', error.message);
        }
      };

      fetchHouseDetails();
    }
  }, [slug]);

  if (!cardDetails) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  const renderLocation = (location) => {
    if (typeof location === 'string') {
      return <p className="text-lg text-gray-700">{location}</p>;
    } else if (typeof location === 'object' && location !== null) {
      return (
        <div>
          <p className="text-lg text-gray-700">Type: {location.type}</p>
          {location.coordinates && (
            <p className="text-lg text-gray-700">
              Coordinates: {location.coordinates.join(', ')}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Header />
      <Head>
        <title>{cardDetails.title}</title>
      </Head>
      <div className="container mx-auto p-6 mt-[110px] md:mt-[150px]">
        <div className="flex flex-col lg:flex-row rounded-xl p-6 border border-black">
          <div className="w-full lg:w-3/5 pr-0 lg:pr-6">
            <h1 className="text-3xl font-bold mb-2">{cardDetails.title}</h1>
            <div className="flex items-center mt-2">
              <span className="text-red-600 mr-2">📍</span>
              {renderLocation(cardDetails.location)}
            </div>
            <p className="text-green-600 text-xl font-bold mb-4">${cardDetails.price}/Month</p>
            <p className="text-gray-500 mb-4">Posted by: {cardDetails.ownerName}</p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-blue-500 hover:underline">Facebook</a>
              <a href="#" className="text-green-500 hover:underline">WhatsApp</a>
              <a href="#" className="text-blue-700 hover:underline">LinkedIn</a>
            </div>
            <div className="mb-6 border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Languages known:</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-200 p-4 rounded">English</span>
                <span className="bg-gray-200 p-4 rounded">Hindi</span>
                <span className="bg-gray-200 p-4 rounded">Kannada</span>
                <span className="bg-gray-200 p-4 rounded">Telugu</span>
              </div>
            </div>
            {cardDetails.overview && (
              <div className="mb-6 border-b pb-4">
                <h2 className="text-lg font-semibold mb-2">Overview:</h2>
                <p>{cardDetails.overview}</p>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4 mb-6 border-b pb-4">
              {cardDetails.type && (
                <div>
                  <h2 className="text-lg font-semibold">Type:</h2>
                  <p>{cardDetails.type}</p>
                </div>
              )}
              {cardDetails.availableFrom && (
                <div>
                  <h2 className="text-lg font-semibold">Available from:</h2>
                  <p>{cardDetails.availableFrom.split('T')[0]}</p>
                </div>
              )}
              <div>
                <h2 className="text-lg font-semibold">Available to:</h2>
                <p>20-07-2024</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Preferred gender: </h2>
                <p>Male</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">No. of people:</h2>
                <p>2</p>
              </div>
              {cardDetails.attachedBath && (
                <div>
                  <h2 className="text-lg font-semibold">Attached bath:</h2>
                  <p>{cardDetails.attachedBath}</p>
                </div>
              )}
              {cardDetails.stayType && (
                <div>
                  <h2 className="text-lg font-semibold">Stay/lease type:</h2>
                  <p>{cardDetails.stayType}</p>
                </div>
              )}
              {cardDetails.furnishing && (
                <div>
                  <h2 className="text-lg font-semibold">Room furnishing:</h2>
                  <p>{cardDetails.furnishing}</p>
                </div>
              )}
            </div>
            {cardDetails.amenities && Array.isArray(cardDetails.amenities) && (
              <div className="mb-6 border-b pb-4">
                <h2 className="text-lg font-semibold mb-2">Amenities:</h2>
                <div className="flex flex-wrap gap-2">
                  {cardDetails.amenities.map((amenity, index) => (
                    <span key={index} className="bg-gray-200 p-4 rounded">{amenity}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="mb-6 border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Utilities:</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 p-4 rounded">Water</span>
                <span className="bg-gray-200 p-4 rounded">TV</span>
                <span className="bg-gray-200 p-4 rounded">Wifi</span>
                <span className="bg-gray-200 p-4 rounded">Room Heater</span>
                <span className="bg-gray-200 p-4 rounded">Washing Machine</span>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Additional Info:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-sm font-semibold">Veg preference:</h3>
                  <p>No</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Smoking Policy:</h3>
                  <p>Yes</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Pet friendly:</h3>
                  <p>Yes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <h2 className="text-lg font-semibold mb-2">Photos:</h2>
            <div className="grid grid-cols-2 gap-2">
              {cardDetails.image ? (
                <img src={`data:image/jpeg;base64,${cardDetails.image}`} alt="House" className="w-full h-32 object-cover rounded hover:scale-105 transition-transform duration-300" />
              ) : (
                <p>No photos available</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailedCardView;