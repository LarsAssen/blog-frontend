import EmailSubscribe from '@/components/EmailSubscription/EmailSubscribe';
import PostList from '@/components/Post/PostList';
import { fetchAPI } from 'lib/api';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Pagination from '@/components/Post/Pagination';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);
  
  return (
    <div>
      <Header />
      <h2 className="text-3xl text-indigo-500">Latest posts</h2>
      <PostList posts={currentPosts}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={articles.length}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />
    </div>
  )
}



export default Home
