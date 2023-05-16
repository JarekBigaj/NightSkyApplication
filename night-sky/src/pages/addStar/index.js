import React, { useState } from 'react';
import PopupCard from '../../helperComponents/PopupCard';

const AddStar = () => {
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
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  return (
    <PopupCard 
        buttonName="Add Star"
        formData={formData} 
        handleInputChange={handleInputChange} 
        handleFormSubmit={handleFormSubmit}
        />
  );
};



export default AddStar;

