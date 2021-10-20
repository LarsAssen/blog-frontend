import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head';
import { fetchAPI } from 'lib/api';
import PostList from '../components/Post/PostList';
import Header from '../components/Header/Header';
const {BLOG_URL, CONTENT_API_KEY} = process.env;
import Layout from '../components/Layout/Layout';
type Post = {
  title: string,
  slug: string
}

async function getPosts(){
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt&limit=3`)
  .then((res) => res.json())

  const posts = res.posts;
  
  return posts;
}


export async function getStaticProps(){
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])
  return {
    props: {articles, categories, homepage},
    revalidate: 1,
  };
}

const Home:React.FC<{articles:any, categories:any, homepage:any}> = ({articles, categories, homepage}) => {
  
  return (
    <div>
      <Layout categories={categories}>
      <Header />
      <h1 className="text-2xl">Welcome</h1>
      </Layout>
    </div>
  )
}

export default Home
