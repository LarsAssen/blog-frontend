import { Post } from 'Models/PostModel';
import React from 'react';
import PostItem from './PostItem';

const PostList: React.FC<{ posts: Post[]}> = ({posts}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
            {posts.map((post) => {
          return <PostItem post={post} key={`article__${post.slug}`} />
        })}
        </div>
    )
}

export default PostList;