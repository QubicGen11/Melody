// src/app/dashboard/Dashboard.js
"use client";

import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import "../globals.css";
import "./dashboard.css";
import Cards from "./Cards";
import PostAdModal from "./PostAdModal"; // Import the modal component
import Header from "./header";
import Footer from "./footer";

const Carousel = dynamic(() => import("./Carousel"), {
  ssr: false,
});

const Dashboard = () => {


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

        <Header/>
      
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
      <div >
        <a href="/flatdetails">
        <Cards />
        
        </a>
      </div>

      {/* <PostAdModal isOpen={isModalOpen} onRequestClose={closeModal} /> */}
      <Footer/>
    </>
  );
};

export default Dashboard;