import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='h-screen flex items-center justify-center flex-col'>
      <h1 className='text-3xl font-semibold'>Homepage</h1>
      <Link href='/users'>Go to users page</Link>
    </div>
    </> 
  )
}
