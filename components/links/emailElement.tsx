'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import { useCopyToClipboard, useWindowSize } from 'usehooks-ts'
import { emailData } from '@/lib/linksData'
interface EmailElementProps {}

const EmailElement: FC<EmailElementProps> = () => {
 const [value, copy] = useCopyToClipboard()
 const [isCopied, setIsCopied] = useState(false)
 const { width, height } = useWindowSize()
 const isMobile = width < 640

 const handleClick = () => {
  copy(emailData.email)
  setIsCopied(true)
  setTimeout(() => {
   setIsCopied(false)
  }, 1000)
 }

 return (
  <div
   className='flex gap-4 p-2  w-full bg-white bg-opacity-10 rounded-xl shadow-md cursor-pointer '
   onClick={handleClick}>
   <Image
    src={emailData.icon}
    width={isMobile ? 24 : 36}
    height={isMobile ? 24 : 36}
    alt={emailData.text}
   />
   <div>
    <p className='text-white text-lg font-semibold sm:text-xl'>{emailData.text}</p>
    <p className='text-xs text-white sm:text-lg'>{isCopied ? 'Copied to clipboard!' : emailData.note}</p>
   </div>
  </div>
 )
}

export default EmailElement
