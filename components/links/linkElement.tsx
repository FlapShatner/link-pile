'use client'
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useWindowSize } from 'usehooks-ts'
import { LinkType } from '@/lib/linksData'

interface LinkProps {
 link: LinkType
}

const LinkElement: FC<LinkProps> = ({ link }) => {
 const { width, height } = useWindowSize()
 const isMobile = width < 640
 return (
  <Link href={link.url}>
   <div className='flex gap-4 p-2 w-full bg-white bg-opacity-10 rounded-xl shadow-md'>
    <Image
     src={link.icon}
     width={isMobile ? 24 : 36}
     height={isMobile ? 24 : 36}
     alt={link.text}
    />
    <div>
     <p className='text-white text-lg font-semibold sm:text-xl'>{link.text}</p>
     <p className='text-white text-xs sm:text-lg'>{link.note}</p>
    </div>
   </div>
  </Link>
 )
}

export default LinkElement
