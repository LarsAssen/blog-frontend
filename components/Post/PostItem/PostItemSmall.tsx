import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Post from "Models/PostModel";
import PostTag from "Models/PostTag";
import CardSmall from "../../UI/CardSmall";
import Tag from "../Tag";
import PostCategory from "../PostCategory";
import PostItemContent from "../PostItemContent";
import { getStrapiMedia } from "lib/media";
import handleTimeToRead from "services/TimeToReadService";
import TimeRead from "@/components/TimeRead/TimeRead";

const PostItemSmall: React.FC<{ post: Post, variant:any, className:string }> = ({ post, variant, className }) => {
  const [timeToRead, setTimeToRead] = useState(0);


  useEffect(() => {
    const time =  handleTimeToRead(post.content)
    setTimeToRead(time)
  }, [post.content]);

  return (
    <CardSmall className={className} variant={variant}>
      <Image width={1200} height={900} className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.image.url} alt={post.image.alternativeText} />
        <div className="p-6">
        <PostCategory categoryName={post.category.name} />
        <TimeRead timeToRead={timeToRead} />
        <PostItemContent title={post.title} description={post.description} />        
        <div className="flex items-center flex-wrap">
          <Link href="/post/[slug]" as={`/post/${post.slug}`}>
            <a className="text-main-color inline-flex items-center md:mb-2 lg:mb-0">Read More 
            </a>
        </Link>

        </div>
        <div className="flex float-right flex-row mt-6 mb-2">
            {post.tags.map((tag: any, index) => {
              return (
                <Tag key={index} tagName={tag.attributes.TagName} />
              );
            })}
          </div>
      </div>
    </CardSmall>
  );
};

export default PostItemSmall;
