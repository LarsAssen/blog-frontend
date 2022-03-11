import React from "react";
import Link from "next/link";
import Image from "../Image/Image";
import { Post } from "Models/PostModel";
import { PostTag } from "Models/PostTag";
import CardSmall from "../UI/CardSmall";
import Tag from "./Tag";
import PostCategory from "./PostCategory";
import Button from "../UI/Button";
import PostItemContent from "./PostItemContent";

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
      <a>
        <CardSmall>
            <div>
              <Image image={post.image} />
            </div>
            <PostCategory categoryName={post.category["name"]} />
            <PostItemContent title={post.title} description={post.description} />
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
