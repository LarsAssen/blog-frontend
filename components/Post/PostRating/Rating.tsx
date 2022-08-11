import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rating:React.FC<{rating: number | null}> = ({rating}) => {

    const stars = []
    const hasRating = rating !== null
    const trueRating = hasRating ? rating : 0
    for (let i = 0; i < trueRating; i++) {
        stars.push(<FontAwesomeIcon key={i} className='text-main-color' icon={faStar} />)
    }

  return (
    <div>
        {stars}
    </div>
  )
}

export default Rating