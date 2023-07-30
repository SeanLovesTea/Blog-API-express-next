
//import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
//import { HiPencilAlt } from 'react-icons/hi'

const getPosts = async () => {
  try {
    const res = await fetch('http://localhost:5000', {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error("Failed to fetch Posts")
    }
    
    return res.json()

  } catch (error) {
    console.log("error loading posts: ", error)
  }
}

export default async function Post () {

  const posts = await getPosts()
  console.log( posts + "this is posts")
  return (
    <>
    {posts?.map(post => (
      <div key={post._id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 bg-white items-start'>
        <div>
          <h2 className='font-bold text-2xl'>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        {/* <div className='flex gap-2'>
          <RemoveBtn id={post._id}/>
          <Link href={`/editPost/${post._id}`}><HiPencilAlt size={24} /></Link>
        </div> */}
      </div>
    ))}
    </>
  )
}
