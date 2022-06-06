import React from 'react'
import TitleSmall from '../UI/Title/TitleSmall'

const PostItemContent:React.FC<{title: string, description: string}> = ({title, description}) => {
  return (
    <div className='mt-2'>
      <div className='h-20'>
        <TitleSmall titleText={title} />
      </div>
      <p className="leading-relaxed mb-3 line-clamp-2">
        {description}
      </p>
  </div>
  )
}

export default PostItemContent