import React from 'react'
import PostList from '../../components/Post/PostList/PostList';
import { fetchAPI } from 'lib/api';
import { Post } from 'Models/PostModel';


  export async function getStaticProps(){
    const [postsData, categories, blog] = await Promise.all([
      fetchAPI("/posts"),
      fetchAPI("/categories"),
      fetchAPI("/blog"),
    ])

    const posts = postsData.data as any[]

    return {
      props: {posts, categories, blog},
      revalidate: 10,
    };
  }


const Blog: React.FC<{ posts: any[], blog:any, categories:any}> = ({posts, blog, categories}) => {

    return (
        <div>
          <PostList posts={posts} />
        </div>
    )
}

export default Blog
