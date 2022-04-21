import CardBig from '@/components/UI/CardBig'
import { Post } from 'Models/PostModel'
import Link from 'next/link'
import React from 'react'
import Moment from 'react-moment'
import PostCategory from '../PostCategory'

const PostItemBig: React.FC<{ post: any }> = ({ post }) => {
  return (
    <CardBig>
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <PostCategory categoryName={post.attributes.category.data.attributes.CategoryName} />
        <span className="mt-1 text-gray-500 text-sm"><Moment format="MMM Do YYYY">{post.attributes.publishedAt}</Moment></span>
      </div>
      <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{post.attributes.Title}</h2>
          <p className="leading-relaxed">{post.attributes.Description}</p>
          <Link href="/post/[slug]" as={`/post/${post.attributes.Slug}`}>
          <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        </div>
    </CardBig>
  )
}

export default PostItemBig