import Avatar from '@/components/avatar'

export default function Home() {
 return (
  <main className='flex min-h-screen flex-col items-center p-16'>
   <div className=' bg-white bg-opacity-10 backdrop-blur-sm '>
    <Avatar size={148} />
    <h1 className='text-4xl font-bold text-center'>@jordan_robots</h1>
   </div>
  </main>
 )
}
