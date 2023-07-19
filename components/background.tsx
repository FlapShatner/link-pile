'use client'
import { FC } from 'react'

import { useCallback } from 'react'
import Particles from 'react-particles'
import type { Container, Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import { options } from '@/lib/options'

interface BackgroundProps {}

const Background: FC<BackgroundProps> = () => {
 const particlesInit = useCallback(async (engine: Engine) => {
  console.log('engine init:', engine)
  await loadFull(engine)
 }, [])

 const particlesLoaded = useCallback(async (container: Container | undefined) => {
  console.log('container init:', container)
 }, [])

 return (
  <Particles
   className='fixed inset-0 z-[-1]'
   id='tsparticles'
   init={particlesInit}
   loaded={particlesLoaded}
   options={options}
  />
 )
}

export default Background
