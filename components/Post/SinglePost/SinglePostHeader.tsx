import TimeRead from '@/components/TimeRead/TimeRead'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Moment from 'react-moment'
import Rating from '../PostRating/Rating'

const SinglePostHeader:React.FC<{imageUrl: string, timeToRead: number, title: string, publishedAt: string, rating: number|null }> = ({imageUrl, timeToRead, title, publishedAt, rating}) => {
  return (
      <div className="w-full text-xl text-gray-800 leading-normal">
        <p><Link href="/"><a className="text-base md:text-sm text-secondary-color font-bold no-underline hover:underline"><AiOutlineArrowLeft className="inline" />Back to blog</a></Link></p>
        <h1 className="pt-4 pb-4">{title}</h1>
        <span className="text-sm md:text-base font-normal text-gray-600">Published <Moment format="MMM Do YYYY">{publishedAt}</Moment></span>
        <TimeRead timeToRead={timeToRead} />
        <Rating rating={rating} />
        <img src={imageUrl} alt={"test"} />
      </div>
  )
}

export default SinglePostHeader