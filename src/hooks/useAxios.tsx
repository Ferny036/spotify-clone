import axios from "axios"
import { useRef } from "react"

const useAxios = (baseURL: string) => {

  const { current } = useRef(baseURL)

  type options = { q?: string, id?: number }
  const getAxiosByQuery = async (path: string, params: options) => {
    return await axios.request({
      url: current + path,
      method: 'GET',
      params,
      headers: {
        "x-rapidapi-key": "7353d1ca2cmshcd25ea22119cbf1p17d169jsn371e81c2e5be",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "useQueryString": true
      }
    }).then(res => res.data)
      .catch(err => {
        console.error(err)
        return {}
      })
  }

  return { getAxiosByQuery }
}

export default useAxios