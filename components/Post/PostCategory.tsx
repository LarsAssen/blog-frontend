import React from 'react'

const PostCategory:React.FC<{categoryName:string}> = ({categoryName}) => {
    return (
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {categoryName}
        </h2>
    )
}

export default PostCategory
