'use client';
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import "../globals.css";
import "./dashboard.css";
 import Link from "next/link";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const email = Cookies.get('userEmail');
    if (email) {
      axios.get(`http://localhost:4000/api/user/${email}`)
        .then(response => {
          setUserName(response.data.user.name);
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  

  const toggleDropdown = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  const handleLogout = () => {
    // Perform logout actions, e.g., clearing cookies, local storage, etc.
    // Redirect to login page or perform any additional cleanup
  };

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
          <Link
              href={'/createpost'}
              // Toggle dropdown on click
            className="hover:bg-gray-100 hidden md:block transform transition duration-300 ease-in-out hover:scale-125"
          >
            Post an Ad
          </Link>
          <a
            href="#"
            className="hover:bg-gray-100 hidden md:block transform transition duration-300 ease-in-out hover:scale-125"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:bg-gray-100 hidden md:block transform duration-300 ease-in-out hover:scale-125"
          >
            Blogs
          </a>
          <a
            href="#"
            className="hover:bg-gray-100 hidden md:block transform duration-300 ease-in-out hover:scale-125"
          >
            Contact us
          </a>
          {/* Dropdown menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center p-2 text-sm text-gray-600  font-semibold  border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring   focus:outline-none"
            >
              <span className="mx-1">{userName}</span>
              <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
              </svg>
            </button>
            {isModalOpen && (
              <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl ">
                <a href="#" className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200" alt="Avatar" />
                  <div className="mx-1">
                    <h1 className="text-sm font-semibold text-gray-700 ">{userName}</h1>
                  </div>
                </a>
                <hr className="border-gray-200 " />
                <Link href="/listings" className="block px-4 py-3 text-sm text-gray-600     ">
                  My Listings
                </Link>
                <a href="#" className="block px-4 py-3 text-sm text-gray-600     ">
                  My Profile
                </a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-600     ">
                  My Bookings
                </a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-600     ">
                  Bookmarks
                </a>
                <Link href="/login" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
