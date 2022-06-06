import CardBig from '@/components/UI/CardBig'
import { Post } from 'Models/PostModel'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import TitleSmall from '@/components/UI/Title/TitleSmall'
import PostCategory from '../PostCategory'
import Tag from '../Tag'

const PostItemBig: React.FC<{ post: any }> = ({ post }) => {
  return (
    <CardBig>
      <div className='h-full w-96 relative'>
        <Image layout='fixed' width={320} height={320} className='w-full h-full relative object-cover' src={post.attributes.Image.data.attributes.url} alt={post.attributes.Image.data.attributes.alternativeText} />
      </div>
        <div className="md:flex-grow ml-3 mt-3">
          <div className='mb-2'>
            <PostCategory categoryName={post.attributes.category.data.attributes.CategoryName} />
          </div>
          <TitleSmall titleText={post.attributes.Title} />
          <p className="leading-relaxed">{post.attributes.Description}</p>
          <div className='mt-10'>
            <Link href="/post/[slug]" as={`/post/${post.attributes.Slug}`}>
            <a className="text-main-color inline-flex items-center mt-4">Learn More</a>
            </Link>
            <div className="flex float-right flex-row mt-6 mb-2">
              {post.attributes.tags.data.map((tag: any) => {
                return (
                  <Tag key={tag.id} tagName={tag.attributes.TagName} />
                );
              })}
            </div>
          </div>
          
        </div>
    </CardBig>
  )
}

export default PostItemBig