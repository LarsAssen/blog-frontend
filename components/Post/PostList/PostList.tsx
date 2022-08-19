import Title from '@/components/UI/Title/Title';
import Post from 'Models/PostModel';
import React from 'react';
import Pagination from '../Pagination';
import PostItem from '../PostItem/PostItem';
import { getPostsPerPage } from 'services/postServices/postService';
import Category from 'Models/CategoryModel';
import Size from 'Models/Enums/Size';
import { motion } from 'framer-motion';

const PostList: React.FC<{ posts: Post[], categories:Category[], totalPosts:number}> = ({posts, categories, totalPosts}) => {
  const [currentPosts, setCurrentPosts] = React.useState(posts);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(12);
  const [totalPages] = React.useState(Math.ceil(totalPosts / postsPerPage));


  const getNextPage = async () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      const nextPosts = await getPostsPerPage(nextPage, postsPerPage);
      setCurrentPosts(nextPosts);
      setCurrentPage(nextPage);
    }
    return;
  }

  const getPreviousPage = async () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      const previousPosts = await getPostsPerPage(previousPage, postsPerPage);
      setCurrentPosts(previousPosts);
      setCurrentPage(previousPage);
    }
    return;
    }
  
  const getPage = async (page:number) => {
    setCurrentPage(page);
    const nextPosts = await getPostsPerPage(page, postsPerPage);
    setCurrentPosts(nextPosts);
  }

  const list = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

    return (
        <div className="text-gray-600 body-font overflow-hidden">
          <div className='container px-5 py-24 mx-auto'>
            <Title size={Size.Large} text="Blog" />
            <Pagination paginateFront={getNextPage} paginateBack={getPreviousPage} totalPosts={totalPosts} currentPage={currentPage} postsPerPage={postsPerPage} />
            <motion.div variants={list} initial="hidden" animate="visible" className='flex flex-auto flex-wrap mt-5 -m-4 list'>
              {currentPosts.map((post) => {
                return <motion.div variants={item} className="item md:w-1/3"  key={`article__${post.slug}`}><PostItem variant={""} className="" size={Size.Medium} post={post} key={`article__${post.slug}`} /></motion.div>
              })}
            </motion.div>
            <Pagination paginateFront={getNextPage} paginateBack={getPreviousPage} totalPosts={totalPosts} currentPage={currentPage} postsPerPage={postsPerPage} />
          </div>
        </div>
    )
}

export default PostList;