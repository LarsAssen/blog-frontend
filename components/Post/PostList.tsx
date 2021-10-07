import React from 'react';
import Link from 'next/link';
import PostItem from './PostItem';


type Post = {
    title: string,
    slug: string
  }

const PostList: React.FC<{ posts: Post[]}> = ({posts}) => {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
            {posts.map((post) => {
          return <PostItem post={post} key={post.slug} />
        })}
        </div>
        </div>
    )
}

export default PostList;