import Card from '@/components/UI/Card/Card';
import Size from 'Models/Enums/Size';
import Post from 'Models/PostModel'
import React, { useEffect, useState } from 'react'
import handleTimeToRead from 'services/TimeToReadService';
import Image from 'next/image';
import PostCategory from '../PostCategory';
import TimeRead from '@/components/TimeRead/TimeRead';
import PostItemContent from '../PostItemContent';
import Link from 'next/link';
import Tag from '../Tag';
import PostTag from 'Models/PostTag';
import Title from '@/components/UI/Title/Title';
import Rating from '../PostRating/Rating';

const PostItem: React.FC<{ post: Post, size:Size, className:string, variant: any }> = ({ post, size, className, variant }) => {

  const [timeToRead, setTimeToRead] = useState(0);


  useEffect(() => {
    const time =  handleTimeToRead(post.content)
    setTimeToRead(time)
  }, [post.content]);


  if(size === Size.Medium) {
    return (
      <Card className={className} size={size} variant={variant}>
        <Image width={1200} height={900} className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.image.url} alt={post.image.alternativeText} />
          <div className="p-6">
          <PostCategory categoryName={post.category.name} />
          <TimeRead timeToRead={timeToRead} />
          <Rating rating={post.rating} />
          <PostItemContent title={post.title} description={post.description} />    
          <div className="flex items-center flex-wrap">
            <Link href="/post/[slug]" as={`/post/${post.slug}`}>
              <a aria-label={post.slug} className="text-main-color inline-flex items-center md:mb-2 lg:mb-0">Read the post
              </a>
          </Link>
          </div>
          <div className="flex float-right flex-row mt-6 mb-2">
            {post.tags.map((tag: PostTag, index) => {
              return (
                <Tag key={index} tagName={tag.name} />
              );
            })}
          </div>
        </div>
      </Card>
    );
  }

  if(size === Size.Large) {
    return (
      <Card className={className} size={size} variant={variant}>
        <div className='h-full w-96 relative'>
          <Image layout='fixed' width={320} height={320} className='w-full h-full relative object-cover' src={post.image.url} alt={post.image.alternativeText} />
        </div>
        <div className="md:flex-grow ml-3 mt-3">
          <div className='mb-2'>
            <PostCategory categoryName={post.category.name} />
          </div>
          <Title size={Size.Medium} text={post.title} />
          <p className="leading-relaxed">{post.description}</p>
          <div className='h-1/3 relative'>
            <div className='absolute bottom-1 left-1'>
            <Link href="/post/[slug]" as={`/post/${post.slug}`}>
            <a className="text-main-color inline-flex items-center mt-4">Read the post</a>
            </Link>
            </div>
            <div className="absolute bottom-1 right-1">
            <div className="flex float-right flex-row">
              {post.tags.map((tag: PostTag, index:number) => {
                return (
                  <Tag key={index} tagName={tag.name} />
                );
              })}
            </div>
            </div>
          </div>
        </div>
      </Card>
      );
    }
    return (
      <Card className={className} size={size} variant={variant}>
        <div className='h-full w-96 relative'>
          <Image layout='fixed' width={320} height={320} className='w-full h-full relative object-cover' src={post.image.url} alt={post.image.alternativeText} />
        </div>
      </Card>
    )
}

export default PostItem