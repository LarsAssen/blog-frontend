import React from 'react'
import PostList from '../../components/Post/PostList/PostList';
import { fetchAPI } from 'lib/api';
import Post from 'Models/PostModel';
import { getPostsPerPage } from 'services/postServices/postService';


  export async function getStaticProps(){
    const [posts, blog] = await Promise.all([
      getPostsPerPage(1, 10),
      fetchAPI("/blog-page"),
    ])

    return {
      props: {posts, blog},
      revalidate: 10,
    };
  }

const Blog: React.FC<{ posts: Post[], blog:any}> = ({posts, blog}) => {
    return (
        <div>
          <PostList posts={posts} totalPosts={posts.length} />
        </div>
    )
}

export default Blog
