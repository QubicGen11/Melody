'use client';
import React, { useState } from "react";
import "../globals.css";
import "./dashboard.css";
import PostAdModal from "./PostAdModal"; // Import the modal component

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <header className="header flex flex-wrap items-center justify-between px-6 py-4 bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50 animate-fade-slide-down">
        <a href="/dashboard">
        <img
          src="https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png"
          className="w-5/12 md:w-40 lg:w-36 transform transition duration-300 ease-in-out hover:scale-125"
          alt="Logo"
        />

        </a>

        <nav className="nav-links flex space-x-4 mt-3 xl:ml-auto xl:mr-7">
          <a
            href="#"
            onClick={openModal} // Open modal on click
            className="hover:bg-gray-100 hidden md:block transform transition duration-300 ease-in-out hover:scale-125"
          >
            Post an Ad
          </a>
          <a
            href="#"
            className="hover:bg-gray-100 hidden md:block transform transition duration-300 ease-in-out hover:scale-125"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:bg-gray-100 hidden md:block transform transition duration-300 ease-in-out hover:scale-125"
          >
            Blogs
          </a>
          <a
            href="#"
            className="hover:bg-gray-100 hidden md:block transform transition duration-300 ease-in-out hover:scale-125"
          >
            Contact us
          </a>
        </nav>
        <div className="auth-buttons flex space-x-4 mt-4 lg:mt-0">
          <a
            href="/login"
            className="login px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded hidden md:block transform transition duration-300 ease-in-out hover:scale-110"
          >
            LOG IN
          </a>
          <a
            href="/register"
            className="signup px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded text-xs md:text-base transform transition duration-300 ease-in-out hover:scale-110"
          >
            SIGN UP
          </a>
        </div>
      </header>
      <PostAdModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Header;