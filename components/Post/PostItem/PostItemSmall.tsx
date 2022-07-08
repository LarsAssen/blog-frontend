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

const PostItemSmall: React.FC<{ post: any, variant:any, className:string }> = ({ post, variant, className }) => {
  const [timeToRead, setTimeToRead] = useState(0);


  useEffect(() => {
    const time =  handleTimeToRead(post.attributes.Content)
    setTimeToRead(time)
  }, [post.attributes.Content]);

  const imageUrl = getStrapiMedia(post.image);
  return (
    <CardSmall className={className} variant={variant}>
      <Image width={1200} height={900} className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.attributes.Image.data.attributes.url} alt={post.attributes.Image.data.attributes.alternativeText} />
        <div className="p-6">
        <PostCategory categoryName={post.attributes.category.data.attributes.CategoryName} />
        <TimeRead timeToRead={timeToRead} />
        <PostItemContent title={post.attributes.Title} description={post.attributes.Description} />        
        <div className="flex items-center flex-wrap">
          <Link href="/post/[slug]" as={`/post/${post.attributes.Slug}`}>
            <a className="text-main-color inline-flex items-center md:mb-2 lg:mb-0">Read More 
            </a>
        </Link>

        </div>
        <div className="flex float-right flex-row mt-6 mb-2">
            {post.attributes.tags.data.map((tag: any) => {
              return (
                <Tag key={tag.id} tagName={tag.attributes.TagName} />
              );
            })}
          </div>
      </div>
    </CardSmall>
  );
};

export default PostItemSmall;
