import React, { useState } from 'react'
import { AddCategory } from './AddCategory';


export const GifExpert = () => {

  const [categories, setCategories] = useState(['Estrellas', 'Flores'])


  return (
    <>
      <h1> GifExpert </h1>

      <AddCategory/>

      {
        categories.map((category) => (
          <li key={category} >{ category }</li>
        ) )
      }

    </>
  );
}
