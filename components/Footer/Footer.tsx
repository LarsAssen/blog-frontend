import React from 'react'

const Footer:React.FC = () => {
    return (
<section className="bg-white py-8 w-full">
    <div className="container mx-auto px-8">
        <div className="table w-full">
            
            <div className="block sm:table-cell">
                <p className="uppercase text-grey text-sm sm:mb-6">Social</p>
                <ul className="list-reset text-xs mb-6">
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="https://www.facebook.com/lars.assen.9" className="text-grey hover:text-grey-dark">Facebook</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="https://www.linkedin.com/in/lars-assen/" className="text-grey hover:text-grey-dark">Linkedin</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="https://github.com/LarsAssen" className="text-grey hover:text-grey-dark">GitHub</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
    )
}

export default Footer
