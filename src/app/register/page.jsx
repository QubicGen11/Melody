'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../globals.css';
import './register.css';

const metadata = {
  title: "Melody Mocktail",
  image: "https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0e63659978c275de9e89f65ca33cc1a2105345ac.png"
};

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    companyName: '',
    role: '' // Initialize role field
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, role: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/user/register', formData);
      console.log('Registration Successful:', response.data);
      toast.success('Registration Successful!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        companyName: '',
        role: ''
      });
      setTimeout(() => {
        router.push('/login'); // Redirect to login page
      }, 1000); // Wait for 3 seconds
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('Error registering user. Please try again.');
    }
  };

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.image} type="image/png" />
      </Head>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#fef8f7]">
        <div className="lg:flex lg:flex-col lg:justify-center lg:w-1/2 lg:fixed lg:h-full lg:p-16 lg:bg-[#fef8f7]">
          <a href="/dashboard" className="mb-4 text-lg text-red-600 xl:relative xl:bottom-20 ">
            &lt; Back to home
          </a>
          <div className="relative w-full h-64 lg:h-[450px] hidden md:block">
            <img
              src={metadata.image}
              alt="Logo"
              className="object-contain w-full h-full jelly"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full lg:w-1/2 p-4 lg:ml-auto lg:relative lg:p-16 bg-white rounded-lg shadow-md overflow-auto">
          <div className="flex flex-col items-center mb-8 lg:mt-0 mt-8">
            <img
              src="https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png"
              alt="Illustration"
              className="object-contain h-12 mb-4 animate-wiggle"
            />
            <h2 className="text-2xl font-semibold text-gray-700 animate-bounce">Sign Up</h2>
            <p className="text-sm text-gray-500">
              Or <a href="/login" className="text-red-600">Login to your account</a>
            </p>
          </div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">Welcome to Melody Mocktail</h2>
          <p className="mb-8 text-gray-500">Please enter your details</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-600">
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-600">
                Role
              </label>
              <select
                id="role"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.role}
                onChange={handleRoleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="Landlord">Landlord</option>
                <option value="Property Manager">Property Manager</option>
                <option value="Both">Both</option>
              </select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-sm text-gray-500">
                By continuing, you agree to Melody Mocktail's{' '}
                <a href="#" className="text-red-500">T&C</a> and{' '}
                <a href="#" className="text-red-500">Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className="bg-red-500 w-full text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-600 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
              Submit
            </button>
          </form>
        </div>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </div>
  );
};

export default Register;