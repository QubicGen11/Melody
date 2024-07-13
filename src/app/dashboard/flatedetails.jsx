// src/app/dashboard/DetailedCardView.jsx

import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../globals.css';

const DetailedCardView = () => {

  // Replace this with your data fetching logic
  const cardDetails = {
    id,
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
    <div>
      
      <Head>
        <title>{cardDetails.title}</title>
      </Head>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">{cardDetails.title}</h1>
        <p className="text-lg text-gray-700">{cardDetails.location}</p>
        <p className="text-green-600 text-xl font-bold">{cardDetails.price}</p>
        <p className="text-gray-500">Posted by: {cardDetails.postedBy}</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-blue-500">Facebook</a>
          <a href="#" className="text-green-500">WhatsApp</a>
          <a href="#" className="text-blue-700">LinkedIn</a>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Languages known:</h2>
          <div className="flex space-x-2">
            {cardDetails.languages.map((language, index) => (
              <span key={index} className="bg-gray-200 p-1 rounded">{language}</span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Overview:</h2>
          <p>{cardDetails.overview}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <h2 className="text-lg font-semibold">Type:</h2>
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
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Amenities:</h2>
          <div className="flex space-x-2">
            {cardDetails.amenities.map((amenity, index) => (
              <span key={index} className="bg-gray-200 p-1 rounded">{amenity}</span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Utilities:</h2>
          <div className="flex space-x-2">
            {cardDetails.utilities.map((utility, index) => (
              <span key={index} className="bg-gray-200 p-1 rounded">{utility}</span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Additional Info:</h2>
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
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Photos:</h2>
          <div className="flex space-x-2">
            {cardDetails.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Photo ${index + 1}`} className="w-32 h-32 object-cover rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCardView;