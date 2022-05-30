import React from 'react'
import TitleSmall from '../UI/Title/TitleSmall'

const PostItemContent:React.FC<{title: string, description: string}> = ({title, description}) => {
  return (
    <div>
      <TitleSmall titleText={title} />
      <p className="leading-relaxed mb-3 line-clamp-2">
        {description}
      </p>
  </div>
  )
}

export default PostItemContent