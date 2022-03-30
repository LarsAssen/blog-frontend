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

const PostItemSmall: React.FC<{ post: Post }> = ({ post }) => {
  const imageUrl = getStrapiMedia(post.image);
  return (
    <CardSmall>
      <Image width={1200} height={900} className="lg:h-48 md:h-36 w-full object-cover object-center" src={imageUrl} alt={post.image.alternativeText} />
        <div className="p-6">
        <PostCategory categoryName={post.category["name"]} />
        <PostItemContent title={post.title} description={post.description} />
        <div className="flex items-center flex-wrap">
          <Link href="/post/[slug]" as={`/post/${post.slug}`}>
            <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
        </Link>
        <div className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            {post.tags.map((tag: PostTag) => {
              return (
                <Tag key={tag.id} tagName={tag.Name} />
              );
            })}
          </div>
        </div>
      </div>
    </CardSmall>
  );
};

export default PostItemSmall;
