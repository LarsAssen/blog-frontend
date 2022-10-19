import React from 'react'
import Image from 'next/image'
import AboutMeImage from '../../imgs/about-me.jpg'
import { fetchAPI } from 'lib/api'
import Title from '@/components/UI/Title/Title'
import Size from 'Models/Enums/Size'
import FooterSocials from '@/components/Footer/FooterSocials'

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
    console.log(aboutData)
    return (
        <div className="container flex flex-wrap px-5 py-24 mx-auto">  
            <div className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200'>
                <Title size={Size.Large} text={aboutData.data.attributes.Title} />
                <p>{aboutData.data.attributes.AboutMeText}</p>
                <Title size={Size.Medium} text="What I do" />
                <p>{aboutData.data.attributes.WhatIDoText}</p>
                <Title size={Size.Medium} text="About this blog" />
                <p>{aboutData.data.attributes.AboutThisBlog}</p>
                <Title size={Size.Medium} text="Where to find me" />
                <div className='h-4'></div>
                <FooterSocials />
            </div>
            <div className='md:py-8 flex flex-col md:w-1/2 md:pl-12'>
                <Image className='rounded-xl' src={aboutData.data.attributes.AboutMeImage.data.attributes.url} alt="About me" width={900} height={1200} />
            </div>
        </div>
    )
}

export default About
