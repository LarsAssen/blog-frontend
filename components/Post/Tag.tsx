import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Tag:React.FC<{tagName:string}> = ({tagName}) => {
    return (
        <div>
            <span className="inline-block bg-main-color text-white rounded-full mx-3 px-3 py-1 text-sm font-semibold mr-2 mb-2"><FontAwesomeIcon icon={faTags} /> {tagName}</span>
        </div>
    )
}

export default Tag
