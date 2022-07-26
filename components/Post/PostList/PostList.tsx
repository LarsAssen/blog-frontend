import TitleBig from '@/components/UI/Title/TitleBig';
import Post from 'Models/PostModel';
import React from 'react';
import Pagination from '../Pagination';
import PostItem from '../PostItem/PostItemBig';
import { getPostsPerPage } from 'services/postServices/postService';

const PostList: React.FC<{ posts: Post[], totalPosts:number}> = ({posts, totalPosts}) => {
  const [currentPosts, setCurrentPosts] = React.useState(posts);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(10);
  const getNextPage = async () => {
    setCurrentPage(currentPage + 1);
    const nextPosts = await getPostsPerPage(currentPage + 1, postsPerPage);
    setCurrentPosts(nextPosts);
  }

  const getPage = async (page:number) => {
    setCurrentPage(page);
    const nextPosts = await getPostsPerPage(page, postsPerPage);
    setCurrentPosts(nextPosts);
  }

  const getPreviousPage = async () => {
    setCurrentPage(currentPage - 1);
    const previousPosts = await getPostsPerPage(currentPage - 1, postsPerPage);
    setCurrentPosts(previousPosts);
  }
    return (
        <div className="text-gray-600 body-font overflow-hidden">
          <div className='container px-5 py-24 mx-auto'>
            <TitleBig variant={"large"} titleText="Blog" />
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