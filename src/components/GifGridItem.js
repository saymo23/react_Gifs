import React from 'react'

export const GifGridItem = ( {id, title, url} ) => { 
  return (
    <li  >
      <img src={url} alt={title} />
    </li>
  )
}
