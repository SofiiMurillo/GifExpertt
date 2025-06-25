import React, { useState } from 'react'

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState(['Nube'])

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(inputValue)
  }

  return (
    <form onSubmit={(event) => onSubmit(event) } >
      <input
        type="text"
        placeholder='Hola, que gif quieres buscar hoy'
        value={inputValue}
        onChange={onInputChange}
      />


    </form>
  )
}
