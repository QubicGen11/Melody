import React from 'react';
import Head from 'next/head';
import '../globals.css';

const blogPosts = [
  {
    id: 1,
    title: 'Embracing ASD and ADHD with Strength-based Parenting',
    date: 'Jul 9 2024',
    description: 'In a world where headlines often highlight challenges faced by parents....',
    imageUrl: 'https://cms.digitalmocktails.com/uploads/Boosting_Brain_Health_Tips_for_a_Sharper_Mind_main_image_fe218c795e.jpg',
  },
  {
    id: 2,
    title: 'Effective Strategies to Handle Your Child\'s Tantrums',
    date: 'Jul 8 2024',
    description: 'Does your child show tantrums? Are you, like me, a parent struggling to....',
    imageUrl: 'https://cms.digitalmocktails.com/uploads/Pool_and_beach_safety_tips_main_image_d61cd86ca9.jpg',
  },
  {
    id: 3,
    title: 'Risky Sports Travel Insurance: Why You Need It',
    date: 'Jul 5 2024',
    description: 'Are you someone who enjoys the idea of pushing your limits through....',
    imageUrl: 'https://cms.digitalmocktails.com/uploads/Risky_Sports_Travel_Insurance_Why_It_s_essential_for_the_Adventurers_main_image_62cb8c18f9.jpg',
  }
];

const Blogs = () => {
  return (
    <div>
      <Head>
        <title>Our Blog Post</title>
        <style>
          {`
            @keyframes leMagnify {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.8);
              }
              100% {
                transform: scale(1);
              }
            }

            .magnify:hover {
              animation: leMagnify 0.5s ease-in-out forwards;
            }
          `}
        </style>
      </Head>
      <main className="main-content p-6 bg-white min-h-screen">
        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center magnify">
          Our Blog <span className="text-black">post</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:ml-36 gap-2 ">
          {blogPosts.map((post) => (
            <div key={post.id} className="card bg-white rounded-lg shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 fade-in-up xl:w-5/6">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-125 magnify"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <p className="text-xs font-semibold mb-2">{post.title}</p>
                <p className="text-sm text-gray-500">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg">
            View All
          </button>
        </div>
      </main>
    </div>
  );
};

export default Blogs;