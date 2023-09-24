import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Email validation using regex
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // All validation passed, proceed with form submission
    toast.success('Our team will contact you soon', {
      position: 'top-right',
      autoClose: 1000,
    });

    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
             
            ></textarea>
          </div>
          <button type="submit">Submit</button>
          <button type="button" className="btn" onClick={() => navigate('/')}>
            Back
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
