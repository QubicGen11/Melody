'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    houseType: '',
    city: '',
    state: '',
    price: 0,
    rentalType: '',
    availableFrom: '',
    leaseType: '',
    adType: '',
    ownerName: '',
    ownerPhone: '',
    amenities: '',
    locationType: '',
    addressState: '',
    addressCity: '',
    image: null, // New state for image
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = Cookies.get('userEmail'); // Retrieve userEmail from cookies

      const base64Image = await convertToBase64(formData.image);

      const response = await axios.post('http://localhost:4000/api/house/houses', {
        email,
        title: formData.title,
        description: formData.description,
        houseType: formData.houseType,
        city: formData.city,
        state: formData.state,
        price: formData.price,
        rentalType: formData.rentalType,
        availableFrom: formData.availableFrom,
        leaseType: formData.leaseType,
        adType: formData.adType,
        ownerName: formData.ownerName,
        ownerPhone: formData.ownerPhone,
        amenities: formData.amenities.split(',').map(item => item.trim()), // Convert amenities to an array
        locationType: formData.locationType,
        address: {
          city: formData.addressCity,
          state: formData.addressState,
          street: '123 Main St', // Sample street address
          zip: '94105', // Sample zip code
          latitude: '37.7749', // Sample latitude
          longitude: '-122.4194', // Sample longitude
        },
        location: {
          type: 'Point',
          coordinates: [-122.4194, 37.7749], // Sample coordinates
        },
        image: base64Image,
      });

      console.log('Post created:', response.data);
      toast.success('Post created successfully!');
      setTimeout(() => {
        router.push('/dashboard');
      }, 500);

      setFormData({
        title: '',
        description: '',
        houseType: '',
        city: '',
        state: '',
        price: 0,
        rentalType: '',
        availableFrom: '',
        leaseType: '',
        adType: '',
        ownerName: '',
        ownerPhone: '',
        amenities: '',
        locationType: '',
        addressState: '',
        addressCity: '',
        image: null,
      });
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Error creating post. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]); // Extracting base64 part
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <>
      <div className="content mt-24">
        <div className="bg-white border border-4 rounded-lg shadow relative mt-20">
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl text-center font-semibold">Create a Post</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="product-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Cozy Apartment in the Heart of the City"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="description"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="A lovely 2-bedroom apartment located in the center of the city, close to all amenities."
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="houseType"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    House Type
                  </label>
                  <input
                    type="text"
                    name="houseType"
                    id="houseType"
                    value={formData.houseType}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Apartment"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="city"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="San Francisco"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="state"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="CA"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="2500"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="rentalType"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Rental Type
                  </label>
                  <input
                    type="text"
                    name="rentalType"
                    id="rentalType"
                    value={formData.rentalType}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Monthly"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="availableFrom"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Available From
                  </label>
                  <input
                    type="date"
                    name="availableFrom"
                    id="availableFrom"
                    value={formData.availableFrom}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="leaseType"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Lease Type
                  </label>
                  <input
                    type="text"
                    name="leaseType"
                    id="leaseType"
                    value={formData.leaseType}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Long-term"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="adType"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Ad Type
                  </label>
                  <input
                    type="text"
                    name="adType"
                    id="adType"
                    value={formData.adType}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="For Rent"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="ownerName"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Owner Name
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    id="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="ownerPhone"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Owner Phone
                  </label>
                  <input
                    type="tel"
                    name="ownerPhone"
                    id="ownerPhone"
                    value={formData.ownerPhone}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="123-456-7890"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="amenities"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Amenities (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="amenities"
                    id="amenities"
                    value={formData.amenities}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Swimming Pool, Gym, Parking"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="locationType"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Location Type
                  </label>
                  <input
                    type="text"
                    name="locationType"
                    id="locationType"
                    value={formData.locationType}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Urban"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="addressCity"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Address City
                  </label>
                  <input
                    type="text"
                    name="addressCity"
                    id="addressCity"
                    value={formData.addressCity}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="San Francisco"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="addressState"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Address State
                  </label>
                  <input
                    type="text"
                    name="addressState"
                    id="addressState"
                    value={formData.addressState}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="CA"
                    required
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="image"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Page;