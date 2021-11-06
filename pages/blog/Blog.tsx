import React from 'react'
import Head from 'next/head';
import PostList from '../../components/Post/PostList';
import { fetchAPI } from 'lib/api';
import Layout from '@/components/Layout/Layout';
import Categories from "@/components/navagation/CategoriesBar";

type ImageType ={
    alternativeText: string,
    name: string,
}

type Post = {
    title: string,
    slug: string,
    image: ImageType,
    description: string
  }

  export async function getStaticProps(){
    const [articles, categories, blog] = await Promise.all([
      fetchAPI("/articles"),
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
          <h1>The Blog</h1>
          <Categories categories={categories} />
          <input type="search" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"/>
          <PostList posts={articles} />
        </div>
    )
}

export default Blog
