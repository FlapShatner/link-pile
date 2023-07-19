import { FC } from 'react'
import Image from 'next/image'

interface AvatarProps {
 size?: number
}

const Avatar: FC<AvatarProps> = ({ size = 96 }) => {
 return (
  <div
   style={{ width: `${size}px` }}
   className='rounded-full overflow-hidden m-auto'>
   <Image
    alt='avatar'
    src='/avatar.png'
    width={size}
    height={size}
   />
  </div>
 )
}

export default Avatar
