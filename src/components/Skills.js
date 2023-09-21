import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name,x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-medium bg-dark text-light 
        py-3 px-5 shadow-dark cursor-pointer absolute'
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
    <h2 className='w-full text-center mt-64 text-8xl font-bold'>Skills</h2>
    <div className='w-full h-screen flex items-center justify-center rounded-full bg-circleLighten relative'>
        <motion.div className='flex items-center justify-center rounded-full font-medium bg-dark text-light p-8 shadow-dark cursor-pointer'
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