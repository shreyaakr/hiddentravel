import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false); // State for login error
  const navigate = useNavigate();

  // Define valid user credentials (replace with actual database or backend integration)
  const validUsers = [
    { email: 'test@example.com', password: 'password123' },
    { email: 'user2@example.com', password: 'secret456' },
    // Add more users as needed
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      console.log('User logged in:', res.data);
      setIsLoggedIn(true);
      setLoginError(false);
      navigate('/district-popup');
    } catch (err) {
      console.error(err);
      setLoginError(true);
    }
    const { email, password } = formData;

    // Check if entered credentials match any valid user
    const isValidUser = validUsers.some(user => user.email === email && user.password === password);

    if (isValidUser) {
      setIsLoggedIn(true); // Set isLoggedIn to true on successful login
      setLoginError(false); // Clear any previous login errors
      // Redirect to DistrictPopup after login
      navigate('/district-popup');
    } else {
      setIsLoggedIn(false); // Ensure isLoggedIn is false on failed login
      setLoginError(true); // Set login error to true
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Login
        </button>

        {/* Display error message if login fails */}
        {loginError && (
          <p className="text-red-600 mt-2">Invalid credentials. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default Login;
