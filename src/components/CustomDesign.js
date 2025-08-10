import React, { useState } from 'react';

function CustomDesign() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, just log the form data
    console.log(formData);
    alert('Thank you! Your custom design inquiry has been submitted.');
    // Reset form fields
    setFormData({ name: '', email: '', phone: '', message: '', file: null });
  };

  return (
    <div className="custom-design-page container">
      <h1>Custom Design</h1>
      <p>Create your dream ring in three simple steps.</p>
      <div className="steps">
        <div className="step">
          <div className="icon">1</div>
          <p>Upload Photo or CAD</p>
        </div>
        <div className="step">
          <div className="icon">2</div>
          <p>Choose Metal & Diamond Specs</p>
        </div>
        <div className="step">
          <div className="icon">3</div>
          <p>Approve Final Design</p>
        </div>
      </div>
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload File</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*,application/pdf"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn primary">Submit</button>
      </form>
    </div>
  );
}

export default CustomDesign;
