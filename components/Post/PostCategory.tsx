import React from 'react'

const PostCategory:React.FC<{categoryName:string}> = ({categoryName}) => {
    return (
        <span className="tracking-widest text-xs title-font font-medium text-main-color border py-1 px-2  border-main-color rounded-xl mb-1">
            {categoryName}
        </span>
    )
}

export default PostCategory
