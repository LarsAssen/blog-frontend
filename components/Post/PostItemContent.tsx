import React from 'react'

const PostItemContent:React.FC<{title: string, description: string}> = ({title, description}) => {
  return (
    <div className="px-6 py-4">
    <div className="container h-10">
      <h2 className="text-xl mb-2 font-bold text-blue-500">
        {title}
      </h2>
    </div>
    <div>
      <p className="text-gray-700 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">
        {description}
      </p>
    </div>
  </div>
  )
}

export default PostItemContent