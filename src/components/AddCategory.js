import {React, useState} from 'react'
import PropsTypes from 'prop-types';


export const AddCategory = ( { setCategories } ) => {

  const [InputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(InputValue.trim().length > 2){
      setCategories(cats => [ InputValue, ...cats ])
      setInputValue('') //Reset
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" value={InputValue} onChange={ e => handleInputChange(e) } />
    </form>
  )
}
AddCategory.PropsTypes = {
  setCategories : PropsTypes.func.isRequired
}