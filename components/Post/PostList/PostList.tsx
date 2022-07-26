import TitleBig from '@/components/UI/Title/TitleBig';
import Post from 'Models/PostModel';
import React from 'react';
import Pagination from '../Pagination';
import PostItem from '../PostItem/PostItemBig';
import { getPostsPerPage } from 'services/postServices/postService';

const PostList: React.FC<{ posts: Post[], totalPosts:number, totalPages:number}> = ({posts, totalPosts, totalPages}) => {
  const [currentPosts, setCurrentPosts] = React.useState(posts);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(10);

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
    return (
        <div className="text-gray-600 body-font overflow-hidden">
          <div className='container px-5 py-24 mx-auto'>
            <TitleBig variant={"large"} titleText="Blog" />
            <Pagination paginateFront={getNextPage} paginateBack={getPreviousPage} totalPosts={totalPosts} currentPage={currentPage} postsPerPage={postsPerPage} />
            <div className='divide-y-2 divide-gray-100'>
              {currentPosts.map((post) => {
                return <PostItem post={post} key={`article__${post.slug}`} />
              })}
            </div>
            <Pagination paginateFront={getNextPage} paginateBack={getPreviousPage} totalPosts={totalPosts} currentPage={currentPage} postsPerPage={postsPerPage} />
          </div>
        </div>
    )
}

export default PostList;