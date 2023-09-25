import Link from 'next/link'
import { useRouter } from 'next/router'
import React,{useState} from 'react'
import { Dribble, GithubIcon, Linkedin, Pinterest, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import Logo from './Logo'


const CustomLink = ({href, title, className=""}) =>{
    const router = useRouter()
    

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}
            >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className="", toggle}) =>{
    const router = useRouter()

    const handleClick = () =>{
        toggle()
        router.push(href)
    }
    

    return (
        <button href={href} className={`${className} relative group text-light my-3`} onClick={handleClick}>
            {title}
            <span className={`
            h-[1px] inline-block bg-light
            absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}
            >&nbsp;</span>
        </button>
    )
}

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () =>{

        setIsOpen(!isOpen)
    }
  return ( 
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8'>
        <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
            <span className={`bg-dark transition-all duration-300  block h-0.5 w-6 rounded-sm  ${isOpen? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark transition-all duration-300  block h-0.5 w-6 rounded-sm my-0.5 ${isOpen? 'opacity-0' : 'opacity-1'}`}></span>
            <span className={`bg-dark transition-all duration-300  block h-0.5 w-6 rounded-sm ${isOpen? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
       
       <div className='w-full flex justify-between items-center lg:hidden'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='ml-4'/>
            </nav>
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://twitter.com/RiajulJ40238" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mr-3">
                    <TwitterIcon/>
                </motion.a>
                <motion.a href="https://github.com/Ria-fahima" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3"
                >
                    <GithubIcon/>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/riajul-jannah-469b31252/" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3">
                    <Linkedin/>
                </motion.a>
                <motion.a href="https://www.pinterest.com.au/fjriajul/" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3">
                    <Pinterest/>
                </motion.a>
                <motion.a href="https://dribbble.com/RiaFahima" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 ml-3">
                    <Dribble/>
                </motion.a>
            </nav>
        </div>

        {isOpen?
        <motion.div 
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate= {{scale:1, opacity:1}}
        className='min-w-[70vw] flex flex-col justify-between items-center
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-20 bg-dark/90 
        rounded-lg backdrop-blur-md py-32'>
           <nav className='flex items-center justify-center flex-col'>
               <CustomMobileLink href="/" title="Home"  toggle={handleClick}/>
               <CustomMobileLink href="/about" title="About"  toggle={handleClick}/>
               <CustomMobileLink href="/projects" title="Projects"  toggle={handleClick}/>
           </nav>
           <nav className='flex items-center justify-center flex-wrap mt-2'>
               <motion.a href="https://twitter.com/RiajulJ40238" target={"_blank"}
               whileHover={{y:-2}}
               whileTap={{scale:0.9}}
               className="w-6 mr-3 sm:mx-1">
                   <TwitterIcon/>
               </motion.a>
               <motion.a href="https://github.com/Ria-fahima" target={"_blank"}
               whileHover={{y:-2}}
               whileTap={{scale:0.9}}
               className="w-6 mx-3 sm:mx-1 bg-light rounded-full"
               >
                   <GithubIcon/>
               </motion.a>
               <motion.a href="https://www.linkedin.com/in/riajul-jannah-469b31252/" target={"_blank"}
               whileHover={{y:-2}}
               whileTap={{scale:0.9}}
               className="w-6 mx-3 sm:mx-1">
                   <Linkedin/>
               </motion.a>
               <motion.a href="https://www.pinterest.com.au/fjriajul/" target={"_blank"}
               whileHover={{y:-2}}
               whileTap={{scale:0.9}}
               className="w-6 mx-3 sm:mx-1 bg-light rounded-full">
                   <Pinterest/>
               </motion.a>
               <motion.a href="https://dribbble.com/RiaFahima" target={"_blank"}
               whileHover={{y:-2}}
               whileTap={{scale:0.9}}
               className="w-6 ml-3 sm:mx-1">
                   <Dribble/>
               </motion.a>
           </nav>
       </motion.div>
        : null}

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo/>
        </div>
    </header>
  )
}

export default NavBar