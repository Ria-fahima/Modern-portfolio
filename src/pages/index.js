import AnimatedText from '@/components/AnimatedText'
import Hire from '@/components/Hire'
import { LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from "../../public/images/profile/propic.jpeg"


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className='flex items-center text-dark w-full min-h-screen'>        
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/3 md:w-full'>
              <Image src={profilePic} alt="coder" className='w-full h-auto 
              lg:hidden md:inline-block md:w-full'
              priority
              sizes='(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Bringing Concepts to Life with the power of Code and Design" 
              className='!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl
               md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a web developer, I am dedicated to turn my imagination into execution with the solid foundation of coding. To explore more, you can go through my projects where I created some modern websites showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Ria-resume.pdf" target={"_blank"}
                className="bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                md:p-2 md:px-4 md:text-base "
                download={true}
                >Resume
                </Link>
                <Link href="mailto:fjriajul@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline
                md:text-base"
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hire/>
      </main>
    </>
  )
}
