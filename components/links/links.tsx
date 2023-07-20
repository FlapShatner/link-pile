import { FC } from 'react'
import LinkElement from './linkElement'
import { linksData } from '@/lib/linksData'
import EmailElement from './emailElement'

interface LinksProps {}

const Links: FC<LinksProps> = () => {
 return (
  <div className='flex flex-col gap-3 mt-4'>
   {linksData.map((link) => (
    <LinkElement
     key={link.id}
     link={link}
    />
   ))}
   <EmailElement />
  </div>
 )
}

export default Links
