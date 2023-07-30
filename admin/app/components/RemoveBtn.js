'use client'
import { HiOutlineTrash } from 'react-icons/hi'
import React from 'react'
import { useRouter } from 'next/navigation'


export default function RemoveBtn({ id }) {
  const router = useRouter()
  const deletePost = async () => {
    const confirmed = confirm('Are you sure?')

    if (confirmed) {
      const res = await fetch(`http://localhost:5000/delete-post/${id}`,{
        method: "DELETE",
        })
        if (res.ok) {
          router.refresh()
        }
    }
  }
  return (
    <button onClick={deletePost} className='text-red-600'>
      <HiOutlineTrash size={24} />
    </button>
  )
}
