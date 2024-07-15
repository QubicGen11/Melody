'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import Header from "../dashboard/header";

const Page = () => {
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const email = Cookies.get('userEmail'); // Assuming the email is stored in a cookie named 'userEmail'
    if (email) {
      axios.get(`http://localhost:4000/api/house/houses/user/${email}`)
        .then(response => {
          if (response.data && Array.isArray(response.data)) {
            setHouses(response.data); // Assuming the response data is an array of houses
          } else {
            setHouses([]);
          }
        })
        .catch(error => {
          if (error.response && error.response.data && error.response.data.error) {
            setError(error.response.data.error);
          } else {
            setError("Error fetching house data");
          }
        });
    } else {
      setError("User email not found");
    }
  }, []);

  const handleCardClick = (id) => {
    // Navigate to the house details page based on the card id
    window.location.href = `/house/${id}`;
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="grid grid-cols-1 mt-24 md:grid-cols-3 gap-4 justify-center">
          {error ? (
            <p className="text-center text-red-500 mt-8">{error}</p>
          ) : houses.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">There are no listings from you.</p>
          ) : (
            houses.map((house) => (
              <div key={house._id} className="card bg-white rounded-lg shadow-md xl:w-10/12 m-4 hover:shadow-2xl transition-transform transform hover:scale-105 fade-in-up" onClick={() => handleCardClick(house._id)}>
                <div className="image-container">
                  <img
                    src={house.image || 'default-image-url'}  
                    alt={house.houseType}
                    className="w-full h-32 object-cover rounded-t-lg card-image"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold">{house.houseType}</p>
                  <p className="text-xs text-gray-500">
                    <span className="text-red-600">📍</span> {house.address.city}, {house.address.state}{' '}
                    <span className="float-right">Rental Type: {house.rentalType}</span>
                  </p>
                  <p className="text-green-600 font-bold">Price: {house.price}</p>
                  <p className="text-xs text-gray-500">Room: {house.room}</p>
                  <p className="text-xs text-gray-500">Available from: {house.availableFrom}</p>
                  <p className="text-xs text-gray-500">Gender: {house.gender}</p>
                  <p className="text-xs text-gray-500">Ad type: {house.adType}</p>
                  <p className="text-xs text-gray-500">Posted by: {house.postedBy}</p>
                  <p className="text-xs text-gray-500">Amenities: {house.amenities.join(', ')}</p>
                  <p className="text-xs text-gray-500">Owner: {house.ownerName}</p>
                  <p className="text-xs text-gray-500">Owner Phone: {house.ownerPhone}</p>
                  <button className="bg-red-600 text-white px-2 py-1 rounded-lg mt-2 text-xs hover:bg-red-600 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110">
                    Contact
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Page;