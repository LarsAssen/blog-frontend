import { Post } from 'Models/PostModel';
import React from 'react';
import PostItem from '../PostItem/PostItemBig';

const PostList: React.FC<{ posts: any[]}> = ({posts}) => {
    return (
        <div className="text-gray-600 body-font overflow-hidden">
          <div className='container px-5 py-24 mx-auto'>
            <h1 className="pb-5 mb-7 mx-auto">Blog</h1>
            <div className='-my-8 divide-y-2 divide-gray-100'>
              {posts.map((post) => {
                return <PostItem post={post} key={`article__${post.attributes.Slug}`} />
              })}
            </div>
          </div>
        </div>
    )
}

export default PostList;