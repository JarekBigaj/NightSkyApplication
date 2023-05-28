import React, { useState,useEffect } from 'react';
import PopupCard from '../../helperComponents/PopupCard';
import { API_GET_CONSTELLATION_LIST } from '../../server';
import { useNavigate } from 'react-router-dom';

const AddStar = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [constellationsName,setConstellationsName] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    urlImage: '',
    constellationId:''
  });
  const navigate = useNavigate();


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
    .then(response => {
      if(!response.ok) navigate(`/message?options=addStar&msg=Failed`);
      return response.json()
    })
    navigate(`/message?options=addStar`);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    console.log(value);
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));

    console.log(value);
  };
  const handleIsSubmited = () =>setIsSubmitted(false);


  const getConstellations = async () =>{
    const response = await fetch(API_GET_CONSTELLATION_LIST);
    if(!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`);
    const json = await response.json();
    return json;
  }

  const selectedConstellationsName = (response) =>{
    return response.map(value =>{
        return{
            id: value.id,
            name: value.name
        }
    })
  }

  useEffect(()=>{
    (async () => {
        try{
            const response = await getConstellations();
            setConstellationsName(selectedConstellationsName(response));
            setFormData((prevData) => { return {...prevData,constellationId:response[0].id}})
        } catch (error) {
            console.log(error);
        }
    })()
  },[])

  return (
    <PopupCard 
        buttonName="Add Star"
        formData={formData} 
        handleInputChange={handleInputChange} 
        handleFormSubmit={handleFormSubmit}
        listOfConstellationsName={constellationsName}
        isSubmitted={isSubmitted}
        handleIsSubmited={handleIsSubmited}
        />
  );
};



export default AddStar;

