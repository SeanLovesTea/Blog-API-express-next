import React, { useState, useEffect } from 'react'


export default function Post () {
  function getPostsData() {
    const [backendData, setBackendData] = useState([{}])
  
    async function fetchData() {
      try{
        const res = await fetch('/')
        const data = await res.json()
        console.log(res + 'express-data')
        setBackendData(data)
      } catch (err) {
        console.error(err)
      }
    }
    useEffect(() => {
      fetchData()
    }, [])
    console.log(backendData)
  }
  const content = (backendData.map(post => (
    <div key={post._id}>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  )))

  return content
}
