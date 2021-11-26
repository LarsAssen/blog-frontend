import EmailSubscribe from '@/components/EmailSubscription/EmailSubscribe';
import PostList from '@/components/Post/PostList';
import { fetchAPI } from 'lib/api';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

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
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?_sort=published_at:DESC"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])
  return {
    props: {articles, categories, homepage},
    revalidate: 10,
  };
}

const Home:React.FC<{articles:Post[], categories:any, homepage:any}> = ({articles, categories, homepage}) => {

  
  return (
    <div>
      <Header />
      <h2 className="text-3xl text-indigo-500">Latest posts</h2>
      <PostList posts={articles}/>
    </div>
  )
}



export default Home
