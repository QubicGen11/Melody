// src/app/dashboard/PostAdModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './PostAdModal.css';

const PostAdModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    houseType: '',
    city: '',
    state: '',
    latitude: '',
    longitude: '',
    amenities: '',
    ownerName: '',
    ownerPhone: '',
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && document.getElementById('__next')) {
      Modal.setAppElement('#__next');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onRequestClose}>&times;</button>
      <h2 className="modal-title">Post an Ad</h2>
      <form onSubmit={handleSubmit} className="modal-form">
        <label>House Type</label>
        <input type="text" name="houseType" value={formData.houseType} onChange={handleChange} required />

        <label>City</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />

        <label>State</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />

        <label>Latitude</label>
        <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} required />

        <label>Longitude</label>
        <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} required />

        <label>Amenities</label>
        <input type="text" name="amenities" value={formData.amenities} onChange={handleChange} />

        <label>Owner Name</label>
        <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} required />

        <label>Owner Phone</label>
        <input type="text" name="ownerPhone" value={formData.ownerPhone} onChange={handleChange} required />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </Modal>
  );
};

export default PostAdModal;