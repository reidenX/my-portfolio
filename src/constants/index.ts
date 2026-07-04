import type { Marker } from '../components/ui/dotted-map'
import type { EducationListProps } from '../types'
import { BiLogoMongodb, BiSolidGraduation } from 'react-icons/bi'
import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io5'
import { SiExpress } from 'react-icons/si'
import { LiaCertificateSolid } from 'react-icons/lia'
import {
  RiJavascriptFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiReactjsFill,
  RiNodejsFill,
} from 'react-icons/ri'

export const NavList = ['Home', 'About', 'Projects', 'Contact']

export const myProjects = [
  {
    id: 1,
    title: 'X clone',
    description:
      'A clone of X featuring authentication, real-time messaging, follow/unfollow, liking, commenting, and more.',
    subDescription: [
      'Built a scalable clone using the MERN stack.',
      'Implemented secure authentication using custom-built, stateless authentication system using JSON Web Tokens(JWT) and Bcrypt for secure user identity management.',
      'The frontend is built with Tailwind Css and DaisyUI to make it responsive and enhance User Experience(UX).',
      'Added a secure session management system using Redis to handle token rotation, bypassing expensive MongoDB lookups for session verification.',
    ],
    href: {
      site: 'https://x-clone-5xkt.onrender.com',
      github: 'https://github.com/Ray-Ibno/x-clone',
    },
    logo: '',
    image: '/assets/projects/x-clone.webp',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/logos/React.webp',
      },
      {
        id: 2,
        name: 'Mongo DB',
        path: '/assets/logos/MongoDB.webp',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/logos/Node.js.webp',
      },
      {
        id: 4,
        name: 'Express',
        path: '/assets/logos/Express.webp',
      },
      {
        id: 5,
        name: 'Tailwind CSS',
        path: '/assets/logos/Tailwind CSS.png',
      },
      {
        id: 6,
        name: 'Redis',
        path: '/assets/logos/Redis.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Netflix clone',
    description:
      'A clone that utilizes external api for searching actors, shows, movies, and watching trailers.',
    subDescription: [
      'Built using MERN stack',
      'Implemented secure authentication using custom-built, stateless authentication system using JSON Web Tokens(JWT) and Bcrypt for secure user identity management.',
      'The frontend is built with Tailwind Css and DaisyUI to make it responsive and enhance User Experience(UX).',
      'Implemented zod validation to ensure data is valid before it reaches the controllers',
    ],
    href: {
      site: 'https://mern-netflix-clone-gofs.onrender.com',
      github: 'https://github.com/Ray-Ibno/netflix-clone',
    },
    logo: '',
    image: '/assets/projects/netflix-clone.webp',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/logos/React.webp',
      },
      {
        id: 2,
        name: 'Mongo DB',
        path: '/assets/logos/MongoDB.webp',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/logos/Node.js.webp',
      },
      {
        id: 4,
        name: 'Express',
        path: '/assets/logos/Express.webp',
      },
      {
        id: 5,
        name: 'Tailwind CSS',
        path: '/assets/logos/Tailwind CSS.png',
      },
    ],
  },
]

export const EducationList: EducationListProps = [
  {
    title: 'Javascript',
    year: '2021',
    description: 'Studied more about Javascript after learning a bit about it at school.',
    achievements: [
      {
        icon: RiJavascriptFill,
        title: 'Javascript',
      },
    ],
  },
  {
    title: 'Html & Css',
    year: '2022',
    description:
      'Studied Html & Css on FreeCodeCamp aiming to be a professional frontend developer. Completed a course and gained a certificate.',
    achievements: [
      {
        icon: RiHtml5Fill,
        title: 'HTML',
      },
      {
        icon: RiCss3Fill,
        title: 'CSS',
      },
      {
        icon: LiaCertificateSolid,
        title: 'FreeCodeCamp',
      },
    ],
  },
  {
    title: 'React and data fetching',
    year: '2022',
    description:
      'Studied React js and integration of RESTful API to retrieve and show data in real-time.',
    achievements: [
      {
        icon: RiReactjsFill,
        title: 'React',
      },
    ],
  },
  {
    title: 'Backend',
    year: '2023',
    description: 'Studied backend with a new goal to be a full-stack developer.',
    achievements: [
      {
        icon: RiNodejsFill,
        title: 'Node js',
      },
      {
        icon: BiLogoMongodb,
        title: 'Mongo db',
      },
      {
        icon: SiExpress,
        title: 'Express js',
      },
    ],
  },
  {
    title: 'Finished College',
    year: '2024',
    description: 'Completed a 4 year IT course and gained a diploma.',
    achievements: [
      {
        icon: BiSolidGraduation,
        title: 'Diploma',
      },
    ],
  },
]

export const markers: Marker[] = [
  {
    lat: 64.1475,
    lng: -21.935,
    size: 0.3,
    pulse: false,
  },
  {
    lat: 46.948,
    lng: 7.4474,
    size: 0.3,
    pulse: false,
  },
  {
    lat: 29.7863,
    lng: -95.3889,
    size: 0.3,
    pulse: false,
  },
  {
    lat: 49.24966,
    lng: -123.11934,
    size: 0.3,
    pulse: false,
  },
  {
    lat: 35.6895,
    lng: 139.6917,
    size: 0.3,
    pulse: false,
  },
  {
    lat: -33.8679,
    lng: 151.2073,
    size: 0.3,
    pulse: false,
  },
  {
    lat: 40.1728,
    lng: 74.006,
    size: 0.3,
    pulse: false,
  },
  {
    lat: 37.5665,
    lng: 126.978,
    size: 0.3,
    pulse: false,
  },
  {
    lat: 9.7392,
    lng: 118.7353,
    size: 1,
  },
]

export const skills = [
  'CSS3',
  'Express',
  'Figma',
  'HTML5',
  'Insomnia',
  'JavaScript',
  'MongoDB',
  'Node.js',
  'React',
  'Redis',
  'Tailwind CSS',
  'Vite.js',
]

export const socials = [
  {
    href: 'https://www.linkedin.com/in/alradenn-ibno-a678801b9/',
    icon: IoLogoLinkedin,
    name: 'Linkedin',
  },
  {
    href: 'https://www.instagram.com/reiden_teiko/',
    icon: IoLogoInstagram,
    name: 'Instagram',
  },
  {
    href: 'https://web.facebook.com/alradenn.ibno.3/',
    icon: IoLogoFacebook,
    name: 'Facebook',
  },
]
