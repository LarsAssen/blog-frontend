import React from 'react';
import Link from 'next/link';
import PostItem from './PostItem';
import PostListStyling from '../../styles/ArticleCardList.module.scss';


type Post = {
    title: string,
    slug: string
  }

const PostList: React.FC<{ posts: Post[]}> = ({posts}) => {
    return (
        <div className={PostListStyling.grid}>
            {posts.map((post) => {
          return <PostItem post={post} key={post.slug} />
        })}
        </div>
    )
}

export default PostList;