import React from 'react'
import PostList from '../../components/Post/PostList/PostList';
import { fetchAPI } from 'lib/api';
import Post from 'Models/PostModel';
import { getPostsPerPage, getTotalPostsCount } from 'services/postServices/postService';


  export async function getStaticProps(){
    const [posts, postsCount,  blog] = await Promise.all([
      getPostsPerPage(1, 10),
      getTotalPostsCount(),
      fetchAPI("/blog-page"),
    ])

    return {
      props: {posts, postsCount, blog},
      revalidate: 10,
    };
  }

const Blog: React.FC<{ posts: Post[], postsCount:any, blog:any}> = ({posts, postsCount, blog}) => {
    return (
        <div>
          <PostList posts={posts} totalPosts={postsCount} />
        </div>
    )
}

export default Blog
