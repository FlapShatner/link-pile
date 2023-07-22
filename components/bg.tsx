import { FC } from 'react'

interface BgProps {}

const Bg: FC<BgProps> = () => {
 return <div className="bg-[url('/wavegradient.png')] bg-center bg-cover fixed inset-0 -z-10"></div>
}

export default Bg
