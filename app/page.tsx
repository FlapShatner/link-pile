import Avatar from '@/components/avatar'
import Socials from '@/components/socials/socials'
import Links from '@/components/links/links'
import { profileData } from '@/lib/profileData'

export default function Home() {
 const { name, handle } = profileData
 return (
  <main className='flex min-h-screen flex-col items-center py-16 px-2'>
   <div className=' bg-blue-400 bg-opacity-20 backdrop-blur-md shadow-md rounded-xl py-8 px-4 sm:px-8 w-[90%] sm:w-[500px]'>
    <Avatar size={148} />
    <h1 className='text-4xl font-semibold text-center'>{name}</h1>
    <h2 className='text-2xl text-center mt-1 opacity-80'>{handle}</h2>
    <div className='mt-4'>
     <Socials />
     <Links />
    </div>
   </div>
  </main>
 )
}
