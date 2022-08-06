import React from 'react'

const BookRating:React.FC<{rating: number}> = ({rating}) => {
  return (
    <div>
        <span>{rating}</span>
    </div>
  )
}

export default BookRating