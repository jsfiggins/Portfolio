import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3x3wmxe', 'template_e45bqvi', e.target, 'tRvDWJIBNkL-MnlHn')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent!");
          
          // Clear the form after submission
          setFormData({
            name: '',
            email: '',
            message: ''
          });

          // Optional: Reset the form itself
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact" className="section contact-container">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p className="contactParagraph">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="form-input" 
            placeholder="Your Name" 
            onChange={handleChange} 
            value={formData.name} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="form-input" 
            placeholder="Your Email" 
            onChange={handleChange} 
            value={formData.email} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            id="message" 
            name="message" 
            className="form-textarea" 
            placeholder="Your Message" 
            onChange={handleChange} 
            value={formData.message} 
            required 
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
