import img1 from '../images/11.jpg'
import img2 from '../images/6.jpg'
import img3 from '../images/8.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/1.jpg'

// 
import avater1 from '../images/avater/1.jpg'
import avater2 from '../images/avater/2.jpg'
import avater3 from '../images/avater/3.jpg'
import avater4 from '../images/avater/4.jpg'
import avater5 from '../images/avater/4.png'
import avater6 from '../images/avater/6.jpg'
import avater7 from '../images/avater/7.jpg'
import avater8 from '../images/avater/8.png'

// 
import flutter from '../images/flutter.jpg'

import {FaCss3, FaLaravel, FaAndroid,FaApple,FaReact, FaMarkdown, FaVuejs, FaNodeJs,
        FaSass, FaFigma, FaJs, FaPython, FaDatabase, FaJava, FaGit, 
        FaPhp, FaGithub} from 'react-icons/fa'


export const navList = ['Hero', 'About', 'Works', 'Skills', 'Testimonials','Contact']

export const AboutData = [
  {
    name:'front end development',
    description:'Lorem,  elit. Eos sapiente porro et, ex beatae sunt molestias consequatur id quam. Quos!',
    img:img1
  },
  {
    name:'back end development',
    description:'Lorem,  elit. Eos sapiente porro et, ex beatae sunt molestias consequatur id quam. Quos!',
    img:img2
  },
  {
    name:'Graphic design',
    description:'Lorem,  elit. Eos sapiente porro et, ex beatae sunt molestias consequatur id quam. Quos!',
    img:img3
  },
  {
    name:'andoid & ios app development',
    description:'Lorem,  elit. Eos sapiente porro et, ex beatae sunt molestias consequatur id quam. Quos!',
    img:img4
  },
]
export const WorkData = [
  {
    tag:'mern',
    name:'shrul',
    description:'A web app buid in react and express',
    img:img1
  },
  {
    tag:'mobile',
    name:'done with it',
    description:'A mobile app for selling staffs you dont need anymore',
    img:img2
  },
  {
    tag:'mobile',
    name:'Contact back up',
    description:'An android mobile app build in kotlin for backing up phon contact',
    img:img3
  },
  {
    tag:'web',
    name:'drental',
    description:'Mearn app for finding hose for rent',
    img:img4
  },
  {
    tag:'web',
    name:'portfolio',
    description:'A portfolio website for describing me',
    img:img5
  },
]
export const skillsData = [
  {
    skill:'css3',
    logo:<FaCss3/>,
  },
  {
    skill:'git',
    logo:<FaGit/>,
  },
  {
    skill:'php',
    logo:<FaPhp/>,
  },
  {
    skill:'github',
    logo:<FaGithub/>,
  },
  {
    skill:'flutter',
    logo:<img width={30} height={30} src={flutter} alt='flutter' style={{borderRadius:'50%'}}/>,
  },
  {
    skill:'android',
    logo:<FaAndroid/>,
  },
  
  {
    skill:'laravel',
    logo:<FaLaravel/>,
  },
  {
    skill:'react',
    logo:<FaReact/>,
  },
  {
    skill:'markdown',
    logo:<FaMarkdown/>,
  },
  {
    skill:'vueJs',
    logo:<FaVuejs/>,
  },
  {
    skill:'nodeJs',
    logo:<FaNodeJs/>,
  },
  {
    skill:'ios',
    logo:<FaApple/>,
  },

  {
    skill:'sass',
    logo:<FaSass/>,
  },
  {
    skill:'figma',
    logo:<FaFigma/>,
  },
  {
    skill:'Js',
    logo:<FaJs/>,
  },
  {
    skill:'python',
    logo:<FaPython/>,
  },
  {
    skill:'java',
    logo:<FaJava/>,
  },
  {
    skill:'databases',
    logo:<FaDatabase/>,
  },
]
export const TestimonialsData =[
  {
    name:'john doe',
    img:avater1,
    body:'Great job would  recoment alot!, try and aleast be smatter',
    company:'ceo at amazon'
  },
  {
    name:'john mark',
    img:avater2,
    body:'You can stay more professional by looking for new thing everyday, dond be too contented with what you know alreay',
    company:'projuct designier at google '
  },
  {
    name:'patrick doe',
    img:avater3,
    body:'A good design should not need any explaination , it shoud explain itself',
    company:'frontend engeneer at microsoft'
  },
  {
    name:'johnson dwayne ',
    img:avater4,
    body:'Using css framework does not solve all problems, you have to learn writing css from scratch to',
    company:'inventer of tailwind'
  },
  {
    name:'mark zakerburg',
    img:avater5,
    body:'You can do it, first get rid of that wrong perceptions in your mind',
    company:'designer at apple'
  },
  {
    name:'andy tesla',
    img:avater6,
    body:'framework doesnt matter, all you need is how you use them',
    company:'director act amazone'
  },
  {
    name:'micheal bush',
    img:avater7,
    body:'Best design need continouse training',
    company:'fronend engeneer at facebook'
  },
  {
    name:'vikram tarkus',
    img:avater8,
    body:'Wrting maintainable code makes up a software engineer',
    company:'project manager at google'
  },
]
export const expirience = [
  {
    year:2022,
    jobs:[
      {
        title:'senior Product design',
        company:'amazon inc',
        description:'I team-work '

      },
      {
        title:'Database designer',
        company:'amazon inc',
        description:'I work on products from the start together with my team until the end then delivery'


      },

    ]
  },
  {
    year:2021,
    jobs:[
      {
        title:'junior frontend developer',
        company:'software mason',
        description:'I work on products from the start together with my team until the end then delivery'


      },
      {
        title:'backend developer',
        company:'software manson',
        description:'I work on products from the start together with my team until the end then delivery'


      },
      {
        title:'Training of trainese',
        company:'software manson',
        description:'I Training of trainese in laravel whit is a php framework'


      },

    ]
  },
  {
    year:2019,
    jobs:[
      {
        title:'project manager',
        company:'digital creation',
        description:'I work on products from the start together with my team until the end then delivery'
      },
      {
        title:'intern',
        company:'digital creation',
        description:'I work on products from the start together with my team until the end then delivery'
      },

    ]
  }
]