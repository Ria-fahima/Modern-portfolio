import React, {useRef} from 'react'
import {motion,useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place,info}) => {
  const ref= useRef(null)
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-center'>
    <LiIcon reference={ref}/>
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:'spring'}}>
        <h3 className='capitalize font-bold text-2xl'>{type}</h3>
        <span className='capitalize font-medium text-dark/75 '>
          {time} | {place}
        </span>
        <p className='font-medium w-full'>
          {info}
        </p>

    </motion.div>
  </li>
}
const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })
  return (
    <div className='mt-64'>
        <h2 className='w-full text-center mb-32 text-8xl font-bold'>Education</h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
          <motion.div 
          style={{scaleY: scrollYProgress}}
          className='absolute left-9 top-0 w-[5px] h-full bg-dark/75 origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                type="Diploma of IT"
                time="Aug 2022 - Feb 2023"
                place="Coder Academy"
                info="Completed some advanced projects such as Building management, E-commerce website, Mental Health program, Scam Checker by using the modern JavaScript frameworks."
                />

                <Details
                type="BSc in Aeronautical Engineering"
                time="Jan 2016 - Jan 2021"
                place="Military Institute of Science and Technology"
                info="Built some projects which encompass a wide range of innovations and developments in aircraft design, propulsion systems and aviation technology."
                />
                
                
            </ul>
        </div>
    </div>
  )
}

export default Education