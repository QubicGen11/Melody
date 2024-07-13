// src/app/dashboard/Dashboard.js
"use client";

import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import "../globals.css";
import "./dashboard.css";
import Cards from "./Cards";
import PostAdModal from "./PostAdModal"; // Import the modal component

const Carousel = dynamic(() => import("./Carousel"), {
  ssr: false,
});

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        <Head>
          <title>Melody Mocktail</title>
          <link
            rel="icon"
            href="https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0e63659978c275de9e89f65ca33cc1a2105345ac.png"
            type="image/png"
          />
        </Head>
        <header className="header flex flex-wrap items-center justify-between px-6 py-4 bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50 animate-fade-slide-down">
          <img
            src="https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png"
            className="w-5/12 md:w-40 lg:w-36 transform transition duration-300 ease-in-out hover:scale-125"
            alt="Logo"
          />
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
        <div
          className="menu flex flex-wrap xl:h-44 justify-center items-center gap-8 p-6 overflow-x-auto mt-[110px]"
          style={{ backgroundColor: "#bb1017" }}
        >
          <div className="menu-item icon-hover-rotate text-center text-white hover:bg-[rgba(0,0,0,0.2)] rounded-lg xl:w-28 xl:p-3">
            <div className="icon-wrapper flex justify-center">
              <div className="icon text-3xl bg-white p-2 xl:w-14 rounded-full">
                🏠
              </div>
            </div>
            <a href="#" className="mt-2 block">
              Rentals & Properties
            </a>
          </div>
          <div className="menu-item icon-hover-rotate text-center text-white hover:bg-[rgba(0,0,0,0.2)]  rounded-lg xl:w-28 xl:p-3">
            <div className="icon-wrapper flex justify-center">
              <div className="icon text-3xl bg-white p-2 xl:w-14 rounded-full">
                🚗
              </div>
            </div>
            <a href="#" className="mt-2 block">
              Ride Sharing
            </a>
          </div>
          <div className="menu-item icon-hover-rotate text-center text-white hover:bg-[rgba(0,0,0,0.2)]  rounded-lg xl:w-28 xl:p-3">
            <div className="icon-wrapper flex justify-center">
              <div className="icon text-3xl bg-white p-2 xl:w-14 rounded-full">
                ✈️
              </div>
            </div>
            <a href="#" className="mt-2 block">
              Travel Suggestions
            </a>
          </div>
          <div className="menu-item icon-hover-rotate text-center text-white hover:bg-[rgba(0,0,0,0.2)]  rounded-lg xl:w-28 xl:p-3">
            <div className="icon-wrapper flex justify-center">
              <div className="icon text-3xl bg-white p-2 xl:w-14 rounded-full">
                🎬
              </div>
            </div>
            <a href="#" className="mt-2 block">
              Movie Suggestions
            </a>
          </div>
          <div className="menu-item icon-hover-rotate text-center text-white hover:bg-[rgba(0,0,0,0.2)]  rounded-lg xl:w-28 xl:p-3">
            <div className="icon-wrapper flex justify-center">
              <div className="icon text-3xl bg-white p-2 xl:w-14 rounded-full">
                🎓
              </div>
            </div>
            <a href="#" className="mt-2 block">
              Study Abroad
            </a>
          </div>
          <div className="menu-item icon-hover-rotate text-center text-white hover:bg-[rgba(0,0,0,0.2)]  rounded-lg xl:w-28 xl:p-3">
            <div className="icon-wrapper flex justify-center">
              <div className="icon text-3xl bg-white p-2 xl:w-14 rounded-full">
                🛂
              </div>
            </div>
            <a href="#" className="mt-2 block">
              Visa & Immigration
            </a>
          </div>
          <div className="menu-item icon-hover-rotate text-center text-white hover:bg-[rgba(0,0,0,0.2)] rounded-lg xl:w-28 xl:p-3 transition duration-300 ease-in-out">
            <div className="icon-wrapper flex justify-center">
              <div className="icon text-3xl bg-white p-2 xl:w-14 rounded-full">
                👥
              </div>
            </div>
            <a href="#" className="mt-2 block">
              Travel Companion
            </a>
          </div>
        </div>

        <main className="main-content p-6">
          <Carousel />
          <div className="image-container flex justify-center"></div>
        </main>

      </div>
      <div>
        <Cards />
      </div>

      <PostAdModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
};

export default Dashboard;