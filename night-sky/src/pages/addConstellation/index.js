import React, { useState } from 'react';
import PopupCard from '../../helperComponents/PopupCard';
import { useNavigate } from 'react-router-dom';

const AddConstellation = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    urlImage: ''
  });
  const navigate = useNavigate();

  const handleFormSubmit = e => {
    e.preventDefault();
    fetch('http://127.0.0.1:3600/api/stars/addConstellation',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
      if(!response.ok) navigate(`/message?options=addStar&msg=Failed`);
      return response.json()
    })

    navigate(`/message?options=addConstellation`);
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
        buttonName="Add Constellation" 
        formData={formData} 
        handleInputChange={handleInputChange} 
        handleFormSubmit={handleFormSubmit}
    />
  );
};



export default AddConstellation;