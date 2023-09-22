import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/sudoku.jpeg"
import project2 from "../../public/images/projects/hangman.jpeg"
import project3 from "../../public/images/projects/bm.jpeg"
import project4 from "../../public/images/projects/binary.jpeg"
import project5 from "../../public/images/projects/mental.jpeg"
import project6 from "../../public/images/projects/fraud.jpeg"



const FeaturedProject = ({type, title, summary, img, gitlink}) => {
    return(
        <article className='w-full flex items-center justify-center rounded-3xl 
        border border-solid border-dark bg-light shadow-2xl p-12'>
            <Link href={gitlink} target="_blank" 
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto"
                priority
                sizes='(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw'/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-secondary font-medium text-xl'>{type}</span>
                <Link href={gitlink} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-3xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={gitlink} target="_blank" className='w-10'>
                    <GithubIcon/>
                </Link>
                <Link href={gitlink} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
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
        <meta name="description" content="any description"/>
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Creativity surpasses expertise"
            className='mb-16'/>

            <div className='grid grid-cols-12 gap-12'>
                <div className='col-span-6'>
                    <FeaturedProject title="Sudoku Board"
                    summary="A project based on Python. It gives the opportunity to solve the board by the user."
                    gitlink="https://github.com/Ria-fahima/Sudoku-Board"
                    type="Project-01"
                    img = {project1}
                    />
                </div>

                <div className='col-span-6'>
                    <FeaturedProject title="Hangman"
                    summary="It is built on Python. It is a terminal based game which has few lives to crack the exact word."
                    gitlink="https://github.com/Ria-fahima/Hangman"
                    type="Project-02"
                    img = {project2}
                    />
                </div>

                <div className='col-span-6'>
                    <FeaturedProject title="Building Management"
                    summary="In this project, PostgreSQL Database System has been used.
                     This app streamlines operations, making it easier to oversee and maintain 
                     facilities efficiently."
                    gitlink="https://github.com/Ria-fahima/Building_mngmt"
                    type="Project-03"
                    img = {project3}
                    />
                </div>

                <div className='col-span-6'>
                    <FeaturedProject title="Binary Search"
                    summary="This app simplifies the process of finding 
                    specific items in a large dataset, delivering results
                     swiftly and accurately."
                    gitlink="https://github.com/Ria-fahima/Binary-Search"
                    type="Project-04"
                    img = {project4}
                    />
                </div>

                <div className='col-span-6'>
                    <FeaturedProject title="Serene"
                    summary="It is a mental health journaling platform that 
                    gives users and other users they authorise the ability 
                    to log and track changes in their emotional state through time"
                    gitlink="https://github.com/seanlb02/MERN_client"
                    type="Project-05"
                    img = {project5}
                    />
                </div>

                <div className='col-span-6'>
                    <FeaturedProject title="ScamChecker"
                    summary="This app provides users with a reliable tool 
                    to safeguard against fraudulent schemes by verifying the links"
                    gitlink="https://github.com/Ria-fahima/ScamChecker"
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