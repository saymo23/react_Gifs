import {React, useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExportApp = () => {
  
  const [categories, setCategories] = useState(['One punch'])

  return (
    <>
      <h2>GifExportApp</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {
          categories.map(category => {
            return <GifGrid key={ category } category={category} />
          })
        }
      </ol>
    </>
  )
}
