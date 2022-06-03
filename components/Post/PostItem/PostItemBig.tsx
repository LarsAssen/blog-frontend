import CardBig from '@/components/UI/CardBig'
import { Post } from 'Models/PostModel'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import TitleSmall from '@/components/UI/Title/TitleSmall'

const PostItemBig: React.FC<{ post: any }> = ({ post }) => {
  return (
    <CardBig>
      <Image width={300} height={300} className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.attributes.Image.data.attributes.url} alt={post.attributes.Image.data.attributes.alternativeText} />
      <div className="md:flex-grow">
        <TitleSmall titleText={post.attributes.Title} />
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