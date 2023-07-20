// import { threads, link, github, linkedin, email } from '@/components/icons'

export const linksData = [
 {
  id: 1,
  text: 'Threads',
  url: 'https://www.threads.net/@jordan_robots',
  icon: '/icons/threads.svg',
  note: 'Follow me on Threads!',
 },
 {
  id: 2,
  text: 'jrobertsweb.dev',
  url: 'https://www.jrobertsweb.dev/',
  icon: '/icons/link.svg',
  note: 'A developer portfolio of sorts',
 },
 {
  id: 3,
  text: 'Github',
  url: 'https://github.com/FlapShatner',
  icon: '/icons/github.svg',
  note: 'All my projects. Finished and unfinished',
 },
 {
  id: 4,
  text: 'LinkedIn',
  url: 'https://www.linkedin.com/in/jordanrobertswebdev',
  icon: '/icons/linkedin.svg',
  note: 'Obligatory LinkedIn Profile',
 },
]

export const emailData = {
 text: 'Email Me',
 icon: '/icons/email.svg',
 email: 'jordan@jrobertsweb.dev',
 note: 'Tap to copy to clipboard',
}

export type EmailType = {
 text: string
 icon: string
 email: string
 note: string
}

export type LinkType = {
 id: number
 text: string
 url: string
 icon: string
 note: string
}
