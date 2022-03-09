import React from "react";
import Link from "next/link";
import Image from "../Image/Image";
import { Post } from "Models/PostModel";
import { PostTag } from "Models/PostTag";
import CardSmall from "../UI/CardSmall";
import Tag from "./Tag";
import PostCategory from "./PostCategory";
import Button from "../UI/Button";

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
      <a>
        <CardSmall>
            <div>
              <Image image={post.image} />
            </div>
            <PostCategory categoryName={post.category["name"]} />
            <div className="px-6 py-4">
              <div className="container h-10">
                <h2 className="text-xl mb-2 font-bold text-blue-500">
                  {post.title}
                </h2>
              </div>
              <div>
                <p className="text-gray-700 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">
                  {post.description}
                </p>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <Button>Read more</Button>
              {post.tags.map((tag: PostTag) => {
                return (
                  <Tag key={tag.id} tagName={tag.Name} />
                );
              })}
            </div>
          </CardSmall>
      </a>
    </Link>
  );
};

export default PostItem;
