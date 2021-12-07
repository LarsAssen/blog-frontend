import React from 'react'

const PostCategory:React.FC<{categoryName:string}> = ({categoryName}) => {
    return (
        <div>
            <span className="inline-block bg-blue-400 rounded-full mx-3 px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{categoryName}</span>
        </div>
    )
}

export default PostCategory
