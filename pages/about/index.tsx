import React from 'react'
import Image from 'next/image'
import AboutMeImage from '../../imgs/about-me.jpg'
import { fetchAPI } from 'lib/api'

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
                <h1>{aboutData.data.attributes.Title}</h1>
                <p>{aboutData.data.attributes.AboutMeText}</p>
                <Image src={AboutMeImage} alt="About me" width={400} height={600} />
            </div>
            <div className='md:py-8 flex flex-col md:w-1/2 md:pl-12'>
                <h1 className='title-font font-semibold tracking-wider mb-3'>My hobbies</h1>
                <div>
                    <ul>
                        <li>Guitar</li>
                        <li>Sketching</li>
                        <li>Running</li>
                        <li>Reading</li>
                        <li>Writing</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
