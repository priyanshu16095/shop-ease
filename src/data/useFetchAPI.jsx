import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetchAPI(url) {
  const[data, setData] = useState([])
  const[loading, setLoading] = useState(false)
  const[error, setError] = useState('')

  async function fetchData() {
    try {
        const response = await axios.get(url)
        if(response.data) {
            setData(response.data)
            setLoading(false)
        }
    } catch(error) {
        setError(error.message)
        setLoading(false)
    }
  }
  useEffect(() => {fetchData()}, [url])

  return {data, loading, error}
}

export default useFetchAPI
