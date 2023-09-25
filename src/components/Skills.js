import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name,x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full 
        font-medium bg-dark text-light 
        py-3 px-5 shadow-dark cursor-pointer absolute
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent
        xs:text-dark xs:font-bold '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration: 1.5}}
        viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}
const Skills = () => {
  return (
    <>
    <h2 className='w-full text-center mt-64 text-8xl font-bold md:text-6xl md:mt-32 xl:mb-32'>Skills</h2>
    <div className='w-full h-screen flex items-center justify-center rounded-full 
    bg-circleLighten relative lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circleLightenLg md:circleLightenMd sm:circleLightenSm'>
        <motion.div className='flex items-center justify-center rounded-full
         font-medium bg-dark text-light p-8 shadow-dark cursor-pointer
         lg:p-6 md:p-4 xs:text-xs xs:p-2'
        whileHover={{scale:1.05}}>
            Web
        </motion.div>
        <Skill name="HTML" x="-22vw" y="2vw"/>
        <Skill name="CSS" x="-5vw" y="-10vw"/>
        <Skill name="JavaScript" x="20vw" y="6vw"/>
        <Skill name="ReactJS" x="0vw" y="10vw"/>
        <Skill name="NextJS" x="-20vw" y="-15vw"/>
        <Skill name="Figma" x="0vw" y="-20vw"/>
        <Skill name="TailwindCSS" x="18vw" y="18vw"/>
        <Skill name="Bootstrap" x="15vw" y="-12vw"/>
        <Skill name="PostgreSQL" x="33vw" y="-12vw"/>
        <Skill name="ExpressJS" x="36vw" y="3vw"/>
        <Skill name="MongoDB" x="-34vw" y="-10vw"/>
        <Skill name="Python" x="-34vw" y="10vw"/>
        <Skill name="Flask" x="-16vw" y="17vw"/>
        <Skill name="Agile Methodology" x="0vw" y="25vw"/>
    </div>
    </>
  )
}

export default Skills