import React, { useState } from 'react'
import { AddCategory } from './AddCategory'


export const GifExpert = () => {

  const [categories, setCategories] = useState(['Gatos', 'Perros'])


  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories])
  }



  return (
    <>
      <h1>Gif expert</h1>

      <AddCategory onNewCategory={onAddCategory} />



      {
        categories.map((category) => {
          return <li key={category} >{ category }</li>
        } )
    }

    </>
  );
}
