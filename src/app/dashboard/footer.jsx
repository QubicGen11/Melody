'use client'; // Ensure this is a client component

import React from 'react';
import '../globals.css';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-4 ">
      <div className="flex flex-col items-center mb-10">
        <img src="https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png" alt="Melody Mocktail Logo" className="mb-4 w-40 hover:animate-bounce" />
        <p className="max-w-xl text-center text-sm">
          "Melody Mocktail is designed to make this process seamless, reliable, and efficient, ensuring you can easily access the services you need, all while supporting your local community."
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mb-10">
        <div className="space-y-2">
          <p className="hover:text-red-500">Contact Us</p>
          <p className="hover:text-red-500">About Us</p>
          <p className="hover:text-red-500">Post an Ad</p>
          <p className="hover:text-red-500">Blogs</p>
          <p className="hover:text-red-500">Services</p>
        </div>
        <div className="space-y-2">
          <p className="hover:text-red-500">Rentals & properties</p>
          <p className="hover:text-red-500">Ride sharing</p>
          <p className="hover:text-red-500">Travel suggestions</p>
          <p className="hover:text-red-500">Movie suggestions</p>
          <p className="hover:text-red-500">Travel companion</p>
        </div>
        <div className="space-y-2">
          <p className="hover:text-red-500">Visa & immigration</p>
          <p className="hover:text-red-500">Study abroad</p>
          <p className="hover:text-red-500">Tax services</p>
          <p className="hover:text-red-500">Terms & Conditions</p>
          <p className="hover:text-red-500">Privacy Policy</p>
        </div>
        <div className="space-y-2">
          <p>Follow Us</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png" alt="Instagram" className="text-red" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/youtube-play.png" alt="YouTube" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/linkedin.png" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
        <p>Melody Mocktail@2023. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;