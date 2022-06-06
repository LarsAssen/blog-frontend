import React from 'react'
import Image from 'next/image'
import AboutMeImage from '../../imgs/about-me.jpg'
import { fetchAPI } from 'lib/api'
import TitleBig from '@/components/UI/Title/TitleBig'
import TitleSmall from '@/components/UI/Title/TitleSmall'

export async function getStaticProps(){
    const [aboutData] = await Promise.all([
      fetchAPI("/about-page"),
    ])

    return {
      props: {aboutData},
      revalidate: 10,
    };
  }

const About: React.FC<{aboutData: any}> = ({aboutData}) => {
    return (
        <div className="container flex flex-wrap px-5 py-24 mx-auto">  
            <div className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200'>
                <TitleBig titleText={aboutData.data.attributes.Title} />
                <p>{aboutData.data.attributes.AboutMeText}</p>
                <TitleSmall titleText="What I do" />
                <p>Over the last few years, I’ve gotten into ultra trail running
                    and self development. I’m always exploring new trails and
                    idea’s. I’m working as a web developer building new software
                    and awesome applications. In my free time, I love to read, run
                    and write. I also love to work out and hang out with friends. 
                </p>
                <TitleSmall titleText="About this blog" />
                <p>I started this blog as a way to share my running and
                    personal adventures, as well as new idea’s and other awesome
                    stuff that is going on in my life. I also love to share some wisdom
                    and thoughts on health, self development and running.
                </p>
                <TitleSmall titleText="Where to find me" />
                
            </div>
            <div className='md:py-8 flex flex-col md:w-1/2 md:pl-12'>
                <Image className='rounded-xl' src={AboutMeImage} alt="About me" width={900} height={1200} />
            </div>
        </div>
    )
}

export default About
