// import { useState, useEffect } from "react"

// export function useFetch(url) {
//   const [data, setData] = useState({})
//   const [isLoading, setLoading] = useState(true)
//   const [error, setError] = useState(false)

//   useEffect(() => {
//     if (!url) return
//     setLoading(true)
//     async function fetchData() {
//       try {
//         const response = await fetch(url, {
//           method: "GET",
//           headers: {
//             Authorization: "Bearer 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",
//           },
//         })

//         if (response.status === 200) {
//           const data = await response.json()
//           setLoading(true)
//           setData(data)
//         } else {
//           setError("Code d'erreur : " + response.status)
//         }
//       } catch (err) {
//         setError(err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [url])

//   return { isLoading, data, error }
// }
