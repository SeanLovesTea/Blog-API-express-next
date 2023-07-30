import Image from 'next/image'
import AddPost from './components/AddPost'
import Link from 'next/link'
import Posts from '@/app/components/Posts'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import options from '@/app/api/auth/[...nextauth]/route'
import AuthBtn from '@/app/components/AuthBtn'

export default async function Home() {
  const session = await getServerSession(options)

  if(!session) {
    redirect('/api/auth/signin')
  }
  return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>Admin Page</h1>
          <AuthBtn />
          <Link href={'/add-post'} className='p-4 bg-green-300'>Create A Post</Link>
          <Posts />
          
        </main>


  )
}
