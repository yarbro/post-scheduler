import { useState, useEffect } from "react"

export default function useFetch(fetchFn) {
  const [data, setData] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false

    fetchFn()
      .then((result) => {
        if (!cancelled) {
          setData({ data: result, loading: false, error: null })
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setData({ data: null, loading: false, error })
        }
      })

    return () => {
      cancelled = true
    }
  }, [fetchFn])

  return data
}
