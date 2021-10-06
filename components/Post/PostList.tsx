import React from 'react';
import Link from 'next/link';
import PostItem from './PostItem';


type Post = {
    title: string,
    slug: string
  }

const PostList: React.FC<{ posts: Post[]}> = ({posts}) => {
    return (
        <div>
            {posts.map((post) => {
          return <PostItem post={post} key={post.slug} />
        })}
        </div>
    )
}

export default PostList;