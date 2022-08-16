import Size from 'Models/Enums/Size'
import React from 'react'
import Title from '../UI/Title/Title'

const PostItemContent:React.FC<{title: string, description: string}> = ({title, description}) => {
  return (
    <div className='mt-2'>
      <div className='h-20'>
        <Title size={Size.Medium} text={title} />
      </div>
      <p className="leading-relaxed mb-3 line-clamp-2">
        {description}
      </p>
  </div>
  )
}

export default PostItemContent