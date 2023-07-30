import Image from 'next/image'
import AddPost from './components/AddPost'
import Link from 'next/link'
import Posts from '@/app/components/Posts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Admin page
      <Posts />
      <Link href={'/add-post'}>Create A Post</Link>
    </main>
  )
}
