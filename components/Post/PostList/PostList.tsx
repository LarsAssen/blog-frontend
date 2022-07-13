import TitleBig from '@/components/UI/Title/TitleBig';
import Post from 'Models/PostModel';
import React from 'react';
import PostItem from '../PostItem/PostItemBig';

const PostList: React.FC<{ posts: Post[]}> = ({posts}) => {
    return (
        <div className="text-gray-600 body-font overflow-hidden">
          <div className='container px-5 py-24 mx-auto'>
            <TitleBig titleText="Blog" />
            <div className='divide-y-2 divide-gray-100'>
              {posts.map((post) => {
                return <PostItem post={post} key={`article__${post.slug}`} />
              })}
            </div>
          </div>
        </div>
    )
}

export default PostList;