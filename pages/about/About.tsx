import React from 'react'

const About: React.FC<{AboutPage: any}> = ({AboutPage}) => {
    return (
        <div className= "container w-full md:max-w-3xl mx-auto pt-20">
            
            <h1>About me</h1>
            <p>Hi everyone, my name is Lars, and Im a software engineering student.
                Next to writing code, I enjoy finding ways to improve my mental and physical health,
                go on adventures, run, read and write. Im currently 22 years old and I live in the Netherlands.
                I also play a bit of guitar, and sketch in my free time.
            </p>
        </div>
    )
}

export default About
