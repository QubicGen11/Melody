// components/detailedCardView.js
'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';


const DetailedCardView = ({ id }) => {
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/house/houses/id/${id}`);
        setCardDetails(response.data);
      } catch (error) {
        console.error('Error fetching house details:', error.message);
      }
    };

    fetchHouseDetails();
  }, [id]);

  if (!cardDetails) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <>
      <div>
      
        <Head>
          <title>{cardDetails.title}</title>
        </Head>

        <div className="container mx-auto p-6 mt-[110px] md:mt-[150px]">
          <div className="flex flex-col lg:flex-row rounded-xl p-6 border border-black">
            <div className="w-full lg:w-3/5 pr-0 lg:pr-6">
              <h1 className="text-3xl font-bold mb-2">{cardDetails.title}</h1>
              <p className="text-lg text-gray-700 mb-4">{`${cardDetails.address.city}, ${cardDetails.address.state}`}</p>
              <p className="text-green-600 text-xl font-bold mb-4">${cardDetails.price}/Month</p>
              <p className="text-gray-500 mb-4">Posted by: {cardDetails.ownerName}</p>

              <div className="mb-6 border-b pb-4">
                <h2 className="text-lg font-semibold mb-2">Description:</h2>
                <p>{cardDetails.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 border-b pb-4">
                <div>
                  <h2 className="text-lg font-semibold">House Type:</h2>
                  <p>{cardDetails.houseType}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Rental Type:</h2>
                  <p>{cardDetails.rentalType}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Available From:</h2>
                  <p>{new Date(cardDetails.availableFrom).toLocaleDateString()}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Lease Type:</h2>
                  <p>{cardDetails.leaseType}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Ad Type:</h2>
                  <p>{cardDetails.adType}</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5">
              <h2 className="text-lg font-semibold mb-2">Amenities:</h2>
              <ul className="list-disc pl-5">
                {cardDetails.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default DetailedCardView;
