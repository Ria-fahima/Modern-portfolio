import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/code-editor.jpeg"
import project6 from "../../public/images/projects/hangman.jpeg"
import project4 from "../../public/images/projects/bm.jpeg"
import project5 from "../../public/images/projects/binary.jpeg"
import project3 from "../../public/images/projects/mental.jpeg"
import project2 from "../../public/images/projects/fraud.jpeg"



const FeaturedProject = ({type, title, summary, img, gitlink}) => {
    return(
        <article className='w-full flex items-center justify-center rounded-3xl 
        border border-solid border-dark bg-light shadow-2xl p-12
        lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4'>
            <Link href={gitlink} target="_blank" 
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg
            lg:w-full'>
                <Image src={img} alt={title} className="w-full h-auto"
                priority
                sizes='(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw'/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-secondary font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={gitlink} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={gitlink} target="_blank" className='w-10 md:w-6'>
                    <GithubIcon/>
                </Link>
                <Link href={gitlink} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2
                 px-6 text-lg font-semibold sm:px-4 sm:text-base'>
                    Visit Project
                </Link>
                </div>
            </div>
        </article>
    )
}
const projects = () => {
  return (
    <>
    <Head>
        <title> Projects page</title>
        <meta name="description" content="In this page, there are some projects where React, TailwindCSS, Python, JavaScript used."/>
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Creativity surpasses expertise"
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 
            md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject title="Code Editor"
                    summary="This project is built with React and inspired by CodePen. It empowers developers, designers and creators to 
                    experiment and innovate seamlessly."
                    gitlink="https://code-editor-rho-six.vercel.app/"
                    type="Project-01"
                    img = {project1}
                    />
                </div>

                <div className='col-span-12'>
                    <FeaturedProject title="ScamChecker"
                    summary="This app provides users with a reliable tool 
                    to safeguard against fraudulent schemes by verifying the links"
                    gitlink="https://github.com/Ria-fahima/ScamChecker"
                    type="Project-02"
                    img = {project2}
                    />
                </div>

                <div className='col-span-12'>
                    <FeaturedProject title="Serene"
                    summary="It is a journaling platform that 
                    gives users to authorise the ability 
                    to log and track changes in their emotional state. "
                    gitlink="https://github.com/seanlb02/MERN_client"
                    type="Project-03"
                    img = {project3}
                    />
                </div>

                <div className='col-span-12'>
                    <FeaturedProject title="BD Management"
                    summary="PostgreSQL is used in this. maintain 
                    facilities efficiently this app streamlines operations."
                    gitlink="https://github.com/Ria-fahima/Building_mngmt"
                    type="Project-04"
                    img = {project4}
                    />
                </div>

                <div className='col-span-12'>
                    <FeaturedProject title="Binary search"
                    summary="This app simplifies the process of finding 
                    specific items in a large dataset, delivering results."
                    gitlink="https://github.com/Ria-fahima/Binary-Search"
                    type="Project-05"
                    img = {project5}
                    />
                </div>

                <div className='col-span-12'>
                    <FeaturedProject title="Hangman"
                    summary="It is a terminal based game(python is used) which has
                     few lives to crack the word."
                    gitlink="https://github.com/Ria-fahima/Hangman"
                    type="Project-06"
                    img = {project6}
                    />
                </div>


            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects