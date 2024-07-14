import React ,{ useState } from 'react';
import './ContactUs.css'; // Import the CSS file
import axios from 'axios';
const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false); // New state variable to track submission status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contacts', formData);
      console.log('Contact form submitted:', res.data);
      setIsSubmitted(true); // Set submission status to true on successful submission
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
      alert('Submitted successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
 
    } catch (err) {
      console.error(err);
      // setIsSubmitted(false);
      alert('Error submitting the form.');
    }
  };
  return (
    <div className="container pt-14">
    <div className="py-10">
      <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
    Contact Us
      </h1>
    </div>
    <div className="contact-us-form">
      </div>
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name}
              onChange={handleChange}
                required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email}
              onChange={handleChange}
               required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" value={formData.message}
              onChange={handleChange}
               required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* {isSubmitted && <p className="success-message">Submitted successfully!</p>} */}
    </div>
    </div>
  );
};

export default ContactUs;
