// pages/house/[id].js
'use client'
import React from 'react';
import axios from 'axios';

const HousePage = ({ house }) => {
  return (
    <div className="house-page">
      <h1>{house.title}</h1>
      {/* Display other details of the house */}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(`http://localhost:3000/api/house/${params.id}`);
    const house = response.data; // Assuming the API returns the house details based on ID
    return { props: { house } };
  } catch (error) {
    console.error('Error fetching house data:', error.message);
    return { props: { house: {} } }; // Return empty house object on error
  }
}

export default HousePage;
