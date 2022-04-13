import React from 'react'
import Image from 'next/image'
import AboutMeImage from '../../imgs/about-me.jpg'

const About: React.FC<{AboutPage: any}> = ({AboutPage}) => {
    return (
        <div className="container flex flex-wrap px-5 py-24 mx-auto">  
            <div className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200'>
                <h1>About me</h1>
                <p>Hi everyone, my name is Lars, and Im a software engineering student.
                    Next to writing code, I enjoy finding ways to improve my mental and physical health,
                    go on adventures, run, read and write. Im currently 22 years old and I live in the Netherlands.
                    I also play a bit of guitar, and sketch in my free time.
                </p>
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
