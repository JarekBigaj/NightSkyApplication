import React, { useState } from 'react';

const AddStar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setIsOpen(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Add Star</button>
      {isOpen && (
        <div className="popup-card">
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddStar;
