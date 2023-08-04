<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/FlapShatner/link-pile">
    <img src="public/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Link Pile</h3>

  <p align="center">
    A linktree inspired link list    
    <br />
    <br />
    <a href="https://jrr.at">View Live</a>
    ·
    <a href="https://github.com/FlapShatner/link-pile/issues">Report Bug</a>
    ·
    <a href="https://github.com/FlapShatner/link-pile/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About

[![Link Pile Screen Shot][product-screenshot]](https://jrr.at)

Link Pile is a static linktree-like web site made with Typescript and Next.js and Tailwind. Use it to share all your links from one place.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### Built With:

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![TailwindCSS][TailwindCSS]][Tailwind-url]
- [![Typescript][Typescript]][Typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/FlapShatner/link-pile.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Edit data files located in the /lib directory with your own information
   ```typescript
    <!-- linksData.ts -->
   export const linksData = [
     {
      id: 1,
      text: 'Link Title',
      url: 'https://www.example.com/user_name',
      icon: '/path/to/image.jpg',
      note: 'Description of link',
     },
     {...},
   ]
   ```
4. Deploy to host of your choice (I use Vercel)

   [![Vercel][Vercel]][Vercel-url]

## Contact

###### Jordan Roberts - jordan@jrobertsweb.dev

[![Threads][Threads]][Threads-url] [![Twitter][Twitter]][Twitter-url] [![Linkedin][Linkedin]][Linkedin-url]

Project Link: [https://github.com/FlapShatner/link-pile](https://github.com/FlapShatner/link-pile)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Linkedin-url]: https://linkedin.com/in/jordanrobertswebdev
[Linkedin]: https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat-square
[product-screenshot]: app/opengraph-image.jpg
[Next.js]: https://img.shields.io/badge/next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
[Threads]: https://img.shields.io/badge/Threads-000?logo=threads&logoColor=fff&style=flat-square
[Threads-url]: https://threads.net/@jordan_robots
[Twitter]: https://img.shields.io/badge/Twitter-1D9BF0?logo=twitter&logoColor=fff&style=flat-square
[Twitter-url]: https://twitter.com/jRobertsWebDev
