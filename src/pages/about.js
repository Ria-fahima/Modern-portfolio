import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import { useMotionValue, useSpring, useInView} from 'framer-motion'
import Head from 'next/head'
import React, {useEffect, useRef} from 'react'


const AnimatedNumber = ({value}) => {

  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {duration:3000})
  const isInView = useInView(ref, {once:true})

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }

  },[isInView, motionValue, value])

  useEffect(() => {
    springValue.on('change',(latest) =>{
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0)
      }
    })

  },[springValue,value])

  return <span ref={ref}></span>
}
const about = () => {
  return (
    <>
    <Head>
        <title> About Page </title>
        <meta name='description' content="A brief description about Riajul Jannah who is a professional Web developer and Designer" />
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText text="Resilience ignites achievement!" className='mb-16'/>
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-4 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
            <p className='font-medium'>
              Ever since I dipped my toes into the waters of web development, nothing has made me happier than taking an idea in my head and bringing it to life through code! 
            </p>
            <p className='font-medium my-4'>
              Every coding project I've completed has taught me something new and opened my eyes to new ideas and possibilities.
              Being a full-stack developer is my true passion because it allows me to build things that improve & change people’s lives, without the limitations of the physical world. Finding simple solutions to complex problems has become my guilty pleasure, but luckily that's part of being a great developer.
            </p>
            <p className='font-medium'>
              As a proud lifelong learner, I love taking on challenges and finding new ways to improve my skills. I'm dedicated to becoming a senior developer in the future, but for now I'm focused on surrounding myself with people who truly love what they do and push me to reach my full potential.
            </p>
          </div>
        
          {/* number of  projects, client satisfaction  */}
          <div className='col-span-4 flex flex-col items-end justify-between'>

            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-6xl font-bold'>
                <AnimatedNumber value={50}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
            </div>

            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-6xl font-bold'>
              <AnimatedNumber value={20}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
            </div>

            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-6xl font-bold'>
              <AnimatedNumber value={2}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
            </div>

          </div>

        </div>
        <Skills/>
        <Experience/>
        <Education/>
      </Layout>
    </main>
    </>
  )
}

export default about