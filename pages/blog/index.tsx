import React from 'react'
import PostList from '../../components/Post/PostList/PostList';
import { fetchAPI } from 'lib/api';
import { Post } from 'Models/PostModel';


  export async function getStaticProps(){
    const [articles, categories, blog] = await Promise.all([
      fetchAPI("/articles?_sort=published_at:DESC"),
      fetchAPI("/categories"),
      fetchAPI("/blog"),
    ])
    return {
      props: {articles, categories, blog},
      revalidate: 10,
    };
  }


const Blog: React.FC<{ articles: Post[], blog:any, categories:any}> = ({articles, blog, categories}) => {

    return (
        <div>
          <PostList posts={articles} />
        </div>
    )
}

export default Blog
