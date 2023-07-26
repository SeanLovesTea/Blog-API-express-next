'use client'
import React, { useState } from "react"

export default function post({ params: { id } }) {

  const [backendData, setBackendData] = useState([{}])
  
  async function fetchData() {
    try{
      const res = await fetch(`http://localhost:5000/posts/${id}`)
      const data = await res.json()
      console.log(data + 'express-data')
      setBackendData(data)
    } catch (err) {
      console.error(err)
    }
  }

  const content = (
    <main>
      {id}
    </main>
  )
  return content
}