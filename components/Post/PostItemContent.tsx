import React from 'react'

const PostItemContent:React.FC<{title: string, description: string}> = ({title, description}) => {
  return (
    <div>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        {title}
      </h1>
      <p className="leading-relaxed mb-3 line-clamp-3">
        {description}
      </p>
  </div>
  )
}

export default PostItemContent