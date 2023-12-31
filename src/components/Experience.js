import React, {useRef} from 'react'
import {motion,useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
  const ref= useRef(null)
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex
   flex-col items-center justify-center md:w-[80%]'>
    <LiIcon reference={ref}/>
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:'spring'}}>
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp; <a href={companyLink} 
        target="_blank" className='text-secondary capitalize'>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-dark/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>
          {work}
        </p>

    </motion.div>
  </li>
}
const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })
  return (
    <div className='my-64'>
        <h2 className='w-full text-center mb-32 text-8xl font-bold
        md:text-6xl xs:text-4xl md:mb-16'>
          Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
          <motion.div 
          style={{scaleY: scrollYProgress}}
          className='absolute left-9 top-0 w-[5px] h-full bg-dark/75 origin-top
          md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4
            xs:ml-2'>
                <Details
                position="Freelance Web Developer"
                companyLink="https://www.freelancer.com.au/"
                company="Freelancer"
                time="Oct 2022 - Present"
                address="Remote"
                work="Executed diverse freelance projects for various clients,
                consistently delivering high quality work within agreed-upon
                deadlines and maintained regular and protective communication 
                with clients to understand the project requirements."
                />

                <Details
                position="Junior Web Developer"
                companyLink="https://futurefriendly.team/"
                company="Future Friendly"
                time="March 2023 - April 2023"
                address="Redfern, NSW, Sydney"
                work="Developed wireframes, site maps and content inventories for new web design. Coded the websites using Next.js, TailwindCSS, React.js, JavaScript and collaborated with team to improve the design in an Agile environment."
                />

                <Details
                position="Frontend Developer"
                companyLink="https://www.bashundharagroup.com/"
                company="Bashundhara Group"
                time="Oct 2021 - June 2022"
                address="Bashundhara residential area, Dhaka"
                work="Developed interfaces with modern Javascript frameworks, HTML and CSS. Worked for trobleshooting and debugging codes ensuring compatibility with devices, browsers and operating systems."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience