import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'



export const GifExpert = () => {

  const [categories, setCategories] = useState(['Estrellas', 'Flores'])


  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
  };

  return (
    <>
      <h1> GifExpert </h1>

      <AddCategory
      onNewCategory={(event) => onAddCategory(event)}
      />

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ) )
      }

    </>
  );
}
