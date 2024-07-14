'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import Cookies from 'js-cookie'; // Import js-cookie for managing cookies

const Login = () => {
  const [loginWithEmail, setLoginWithEmail] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4000/api/user/login', {
        email,
        password
      });

      if (response.status === 200) {
        toast.success('Login successful!');
        
        // Set email in a cookie
        Cookies.set('userEmail', email, { expires: 7 }); // Expires in 7 days

        // Redirect to dashboard page
        router.push('/dashboard');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Invalid credentials. Please try again.');
      } else {
        toast.error('Login error: ' + error.message);
      }
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Melody Mocktail</title>
        <link rel="icon" href="https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0e63659978c275de9e89f65ca33cc1a2105345ac.png" type="image/png" />
      </Head>
      <ToastContainer />
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#fef8f7]">
        <div className="lg:flex lg:flex-col lg:justify-center lg:w-1/2 lg:fixed lg:h-full lg:p-16 lg:bg-[#fef8f7] animate-fade-in-left">
          <a href="/dashboard" className="mb-4 text-lg text-red-600 xl:relative xl:bottom-20 animate-slide-in-left">
            &lt; Back to home
          </a>
          <div className="relative w-full h-64 lg:h-[450px] hidden md:block">
            <img
              src="https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0e63659978c275de9e89f65ca33cc1a2105345ac.png"
              alt="Logo"
              className="object-contain w-full h-full jelly animate-spin-slow"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full lg:w-1/2 p-4 lg:ml-auto lg:relative lg:p-16 bg-white rounded-lg shadow-md overflow-auto animate-fade-in-right">
          <div className="flex flex-col items-center mb-8 lg:mt-0 mt-8">
            <img
              src="https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png"
              alt="Illustration"
              className="object-contain h-12 mb-4 animate-wiggle"
            />
            <h2 className="text-2xl font-semibold text-gray-700 animate-bounce">Login</h2>
            <p className="text-sm text-gray-500">
              Or <a href="/register" className="text-red-600 hover:underline">Create an account</a>
            </p>
          </div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-700 animate-pulse">Welcome back</h2>
          <p className="mb-8 text-gray-500">Please enter your {loginWithEmail ? 'email' : 'phone number'}</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="loginWithEmail"
                checked={loginWithEmail}
                onChange={() => setLoginWithEmail(!loginWithEmail)}
                className="mr-2 hidden"
              />
              <label htmlFor="loginWithEmail" className="text-sm text-gray-500">
                Login with <span className="hover:underline cursor-pointer text-red-600">{loginWithEmail ? 'Phone Number' : 'Email'}</span>
              </label>
            </div>
            {loginWithEmail ? (
              <div className="animate-fade-in">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" className="block mb-2 mt-4 text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-red-500 w-full text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-600 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce mt-4">
                  Login
                </button>
              </div>
            ) : (
              <div className="animate-fade-in">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-600">
                  Phone
                </label>
                <div className="flex">
                  <select
                    id="countryCode"
                    className="px-2 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    {/* Add other country codes as needed */}
                  </select>
                  <input
                    id="phone"
                    type="number"
                    placeholder="Enter Number"
                    className="w-3/4 px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <button className="bg-red-500 w-full text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-600 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce mt-4">
                  Request OTP
                </button>
              </div>
            )}
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-500">
                By continuing, you agree to Melody Mocktail's{' '}
                <a href="#" className="text-red-500">T&C</a> and{' '}
                <a href="#" className="text-red-500">Privacy Policy</a>
              </label>
            </div>
            <div>
              <div className="g-recaptcha" data-sitekey="your-site-key"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
