import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "Models/PostModel";
import { PostTag } from "Models/PostTag";
import CardSmall from "../../UI/CardSmall";
import Tag from "../Tag";
import PostCategory from "../PostCategory";
import PostItemContent from "../PostItemContent";
import { getStrapiMedia } from "lib/media";

const PostItemSmall: React.FC<{ post: any, variant:any, className:string }> = ({ post, variant, className }) => {
  const imageUrl = getStrapiMedia(post.image);
  return (
    <CardSmall className={className} variant={variant}>
      <Image width={1200} height={900} className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.attributes.Image.data.attributes.url} alt={post.attributes.Image.data.attributes.alternativeText} />
        <div className="p-6">
        <PostCategory categoryName={post.attributes.category.data.attributes.CategoryName} />
        <PostItemContent title={post.attributes.Title} description={post.attributes.Description} />
        <div className="flex items-center flex-wrap">
          <Link href="/post/[slug]" as={`/post/${post.attributes.Slug}`}>
            <a className="text-main-color inline-flex items-center md:mb-2 lg:mb-0">Read More 
            </a>
        </Link>
        <div className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            {post.attributes.tags.data.map((tag: any) => {
              return (
                <Tag key={tag.id} tagName={tag.attributes.TagName} />
              );
            })}
          </div>
        </div>
      </div>
    </CardSmall>
  );
};

export default PostItemSmall;
