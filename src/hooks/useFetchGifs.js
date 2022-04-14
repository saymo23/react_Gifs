import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {

    setTimeout(() => {

      getGifs(category).then((imgs) => {
          setState({
            data: imgs,
            loading: false
          })
        }
      )

    }, 1000);


  }, [category])

  // setTimeout(() => {
  //   setState({
  //     data: [1,2,3,4,5],
  //     loading: false
  //   })
  // }, 3000);

  return state
}