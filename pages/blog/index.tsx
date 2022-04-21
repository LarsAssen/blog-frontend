import React from 'react'
import PostList from '../../components/Post/PostList/PostList';
import { fetchAPI } from 'lib/api';
import { Post } from 'Models/PostModel';


  export async function getStaticProps(){
    const [postsData, blog] = await Promise.all([
      fetchAPI("/posts"),
      fetchAPI("/blog-page"),
    ])

    const posts = postsData.data as any[]

    return {
      props: {posts, blog},
      revalidate: 10,
    };
  }

const Blog: React.FC<{ posts: any[], blog:any}> = ({posts, blog}) => {

    return (
        <div>
          <PostList posts={posts} />
        </div>
    )
}

export default Blog
