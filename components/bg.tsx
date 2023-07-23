import { FC } from 'react'

interface BgProps {}

const Bg: FC<BgProps> = () => {
 return <div className="bg-[url('/wavegradient.png')] bg-cover bg-{bottom} fixed inset-0 -z-10"></div>
}

export default Bg
