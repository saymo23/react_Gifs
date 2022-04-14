import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {

  //! Custom Hook: Este hook se ancarga de casi toda la logica
  const {data, loading} = useFetchGifs(category);  

  return (
    <div>
      <h3 > { category } </h3>

      <div>{ loading && 'Cargando ...' }</div>
      <br/>
      { <ol>
        {
          data.map((img) => {
            return <GifGridItem key={img.id} {...img}/>
          })
        }
      </ol> }
    </div>
  )
}