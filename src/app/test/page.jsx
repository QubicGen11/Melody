'use client'; // Ensure this is a client component

import React from 'react';
import Head from 'next/head';
import Header from '../dashboard/header';
import Footer from '../dashboard/footer';

const DetailedCardView = () => {
  const cardDetails = {
    title: 'Private Room in a 2Bed 2Bath apartment',
    location: '15083 U.S. Hwy 281 N, San Antonio, TX 78232, San Antonio,Texas',
    price: '$900/Month',
    postedBy: 'Pravallika',
    languages: ['Telugu', 'Hindi', 'English'],
    overview: 'Looking for a female roommate to share a 2 bed 2 bath apartment in San Antonio. Lease starts from September 16th 2024. The rent is $900 for a private room with a private washroom. Utilities are not included in the rent.',
    type: 'Single room',
    availableFrom: '16 September 2024',
    availableTo: '15 September 2025',
    preferredGender: 'Female',
    people: 'Individual',
    attachedBath: 'yes',
    stayType: 'Long term',
    furnishing: 'Unfurnished',
    amenities: ['Swimming pool', 'Gym/Fitness center', 'Car park', 'Garbage disposal', 'Security system', 'Club house', 'Water heater'],
    utilities: ['Washer', 'Dryer', 'Room heater', 'Air conditioner', 'Refrigerator', 'Dishwasher', 'Kitchen microwave'],
    additionalInfo: {
      vegPreference: 'Non-veg is ok',
      smokingPolicy: 'No smoking',
      petFriendly: 'No pets'
    },
    photos: [
      'https://res.cloudinary.com/defsu5bfc/image/upload/v1720884119/house_one_hlqjli.jpg',
      'https://res.cloudinary.com/defsu5bfc/image/upload/v1720884543/house_two_m3gjiy.jpg',
      'https://www.home-designing.com/wp-content/uploads/2018/05/stylish-mid-century-style-green-living-room.jpg'
    ]
  };

  return (
    <>
     <div>
      <Header/>
      <Head>
        <title>{cardDetails.title}</title>
      </Head>

      <div className="container mx-auto p-6 mt-[110px] md:mt-[150px]">
        <div className="flex flex-col lg:flex-row rounded-xl p-6 border border-black">
          <div className="w-full lg:w-3/5 pr-0 lg:pr-6">
            <h1 className="text-3xl font-bold mb-2">{cardDetails.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{cardDetails.location}</p>
            <p className="text-green-600 text-xl font-bold mb-4">{cardDetails.price}</p>
            <p className="text-gray-500 mb-4">Posted by: {cardDetails.postedBy}</p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-blue-500 hover:underline">Facebook</a>
              <a href="#" className="text-green-500 hover:underline">WhatsApp</a>
              <a href="#" className="text-blue-700 hover:underline">LinkedIn</a>
            </div>
            <div className="mb-6 border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Languages known:</h2>
              <div className="flex space-x-2">
                {cardDetails.languages.map((language, index) => (
                  <span key={index} className="bg-gray-200 p-1 rounded">{language}</span>
                ))}
              </div>
            </div>
            <div className="mb-6 border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Overview:</h2>
              <p>{cardDetails.overview}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6 border-b pb-4">
              <div>
                <h2 className="text-lg font-semibold ">Type:</h2>
                <p>{cardDetails.type}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Available from:</h2>
                <p>{cardDetails.availableFrom}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Available to:</h2>
                <p>{cardDetails.availableTo}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Preferred gender:</h2>
                <p>{cardDetails.preferredGender}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">No. of people:</h2>
                <p>{cardDetails.people}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Attached bath:</h2>
                <p>{cardDetails.attachedBath}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Stay/lease type:</h2>
                <p>{cardDetails.stayType}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Room furnishing:</h2>
                <p>{cardDetails.furnishing}</p>
              </div>
            </div>
            <div className="mb-6 border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Amenities:</h2>
              <div className="flex flex-wrap gap-2">
                {cardDetails.amenities.map((amenity, index) => (
                  <span key={index} className="bg-gray-200 p-1 rounded">{amenity}</span>
                ))}
              </div>
            </div>
            <div className="mb-6 border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Utilities:</h2>
              <div className="flex flex-wrap gap-2">
                {cardDetails.utilities.map((utility, index) => (
                  <span key={index} className="bg-gray-200 p-1 rounded">{utility}</span>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Additional Info:</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="text-sm font-semibold">Veg preference:</h3>
                  <p>{cardDetails.additionalInfo.vegPreference}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Smoking Policy:</h3>
                  <p>{cardDetails.additionalInfo.smokingPolicy}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Pet friendly:</h3>
                  <p>{cardDetails.additionalInfo.petFriendly}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <h2 className="text-lg font-semibold mb-2">Photos:</h2>
            <div className="grid grid-cols-2 gap-2">
              {cardDetails.photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Photo ${index + 1}`} className="w-full h-32 object-cover rounded hover:scale-105 transition-transform duration-300" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>  
    </>

  );
};

export default DetailedCardView;