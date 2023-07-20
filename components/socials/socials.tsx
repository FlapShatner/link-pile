import { FC } from 'react'
import Link from 'next/link'
import { socialsData } from '@/lib/socialsData'

interface SocialsProps {}

const Socials: FC<SocialsProps> = () => {
 return (
  <>
   <div className='flex justify-center p-0 sm:p-6 gap-6'>
    {socialsData.map((social) => (
     <Link
      key={social.id}
      href={social.url}>
      <div className='opacity-60 hover:opacity-100 transition-opacity delay-75'>{social.icon}</div>
     </Link>
    ))}
   </div>
  </>
 )
}

export default Socials
