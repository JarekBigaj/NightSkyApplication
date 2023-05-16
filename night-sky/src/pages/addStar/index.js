import React, { useState } from 'react';
import styled from 'styled-components';

const AddStar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    urlImage: '',
    constellationId:''
  });

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(formData)
    fetch('http://127.0.0.1:3600/api/stars/addStar',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
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
    <PopupCard>
      <button onClick={togglePopup}>Add Star</button>
      {isOpen && (
        <div className="popup-card">
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </label>
            <label>
              Description:
              <textarea name="description" value={formData.description} onChange={handleInputChange} />
            </label>
            <label>
              urlImage:
              <input type="text" name="urlImage" value={formData.urlImage} onChange={handleInputChange} />
            </label>
            <label>
              Constellation:
              <input type="text" name="constellationId" value={formData.constellationId} onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </PopupCard>
  );
};

const PopupCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 9999;

  form {
    display: grid;
    grid-gap: 10px;
  }

  label {
    display: block;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 5px;
  }

  button {
    display: block;
    margin-top: 10px;
  }
`;


export default AddStar;

