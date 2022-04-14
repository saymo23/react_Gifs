import React from 'react'

export const GifGridItem = ( {id, title, url} ) => { 
  return (
    <li  className='animate__animated animate__fadeIn'>
      <img src={url} alt={title} />
    </li>
  )
}
