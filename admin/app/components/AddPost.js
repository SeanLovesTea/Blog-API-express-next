'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation"

export default function AddPost() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [isPublished, setIsPublished] = useState('false')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!title || !body) {
      alert("Title and Body are required")
      return
    }
    try {
      const res = await fetch('http://localhost:5000/add-post', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, body, isPublished })
      })

      if (res.ok) {
        router.push('/')
      } else {
        throw new Error ('Failed to create Post')
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
      onChange={(e) => setTitle(e.target.value)} 
      type="text" 
      className='border border-slate-500 px-8 py-2'
      placeholder='Post Title'
      />
      <input
      onChange={(e) => setBody(e.target.value)}  
      type="text" 
      className='border border-slate-500 px-8 py-2'
      placeholder='Post body'
      />
      <input
      type='checkbox'
      onChange={(e) => setIsPublished(e.target.checked)}
      />

      <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Post</button>
    </form>
  )
}
