import React from 'react'
import Head from 'next/head';
import PostList from '../../components/Post/PostList';
import { fetchAPI } from 'lib/api';


type ImageType ={
    alternativeText: string,
    name: string,
}

type Post = {
    title: string,
    slug: string,
    image: ImageType
  }

  export async function getStaticProps(){
    const [articles, categories, blog] = await Promise.all([
      fetchAPI("/articles"),
      fetchAPI("/categories"),
      fetchAPI("/blog"),
    ])
    return {
      props: {articles, categories, blog},
      revalidate: 1,
    };
  }


const Blog: React.FC<{ articles: Post[], blog:any}> = ({articles, blog}) => {

    return (
        <div>
            <h1>{blog.name}</h1>
            <PostList posts={articles} />
        </div>
    )
}

export default Blog
