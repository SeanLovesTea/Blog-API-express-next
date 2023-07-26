'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [backendData, setBackendData] = useState([{}])
  
  async function fetchData() {
    try{
      const res = await fetch('http://localhost:5000/')
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

    return (
      <main>
          {backendData.map(post => (
            <div key={post._id}>
              <a href={`/post/${post._id}`}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </a>
            </div>
          ))}
      </main>
    )
  }

