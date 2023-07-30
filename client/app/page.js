import Image from 'next/image'
import Posts from './components/Posts'

export default function Home() {

    return (
      <main className='p-4 bg-slate-600'>
         <Posts />
      </main>
    )
  }

