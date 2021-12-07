import React from 'react'

const PostTag:React.FC<{tagName:string}> = ({tagName}) => {
    return (
        <div>
            <span className="inline-block bg-gray-200 rounded-full mx-3 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tagName}</span>
        </div>
    )
}

export default PostTag
