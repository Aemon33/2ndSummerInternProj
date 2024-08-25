'use client';

import {useEffect, useState} from 'react';
import PropertyListItem from './PropertyListItem'

export type PropertyType = {
  id:string;
  title:string;
  price_per_night:number
  image_url:string;
} 

function PropertyList() {
const [properties, setProperties] = useState<PropertyType[]>([])
  const getProperties  = async () =>{

    const url = 'http://localhost:8000/api/properties/';
    await fetch(url, { method:"GET"})
    .then(res=> res.json())
    .then(data =>{


      setProperties(data.data) 
      console.log('data', data)
    } 
   )
      
    .catch((error)=>{
      console.log("error", error);
    })
  }


  useEffect(()=>{
      getProperties();
  }, []);
  console.log(properties)
  return (
    <>
    {properties.map(property=>{
      return (<PropertyListItem 
        key = {property.id}
        property={property}
      />)
    })}
    
    </>
  )
}

export default PropertyList