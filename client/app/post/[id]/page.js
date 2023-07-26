'use client'
import React, { useState, useEffect } from "react"

export default function post({ params: { id } }) {
  const [backendData, setBackendData] = useState({})
  async function fetchData() {
    try{
      const res = await fetch(`http://localhost:5000/post/${id}`)
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
    return (
      <main>
          <h1>{backendData.title}</h1>
          <p>{backendData.body}</p>
          <p>{backendData.createdAt}</p>
      </main>
    )
  }

