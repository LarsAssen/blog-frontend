import TitleBig from '@/components/UI/Title/TitleBig';
import Post from 'Models/PostModel';
import React from 'react';
import Pagination from '../Pagination';
import PostItem from '../PostItem/PostItem';
import { getPostsPerPage, getPostsPerCategory } from 'services/postServices/postService';
import Category from 'Models/CategoryModel';
import CategorySelect from '@/components/Filtering/CategorySelect';
import Size from 'Models/Enums/Size';

const PostList: React.FC<{ posts: Post[], categories:Category[], totalPosts:number, totalPages:number}> = ({posts, categories, totalPosts, totalPages}) => {
  const [currentPosts, setCurrentPosts] = React.useState(posts);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentCategory, setCurrentCategory] = React.useState('');
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

    const PostsPerCategory = async (category:string) => {
      const posts = await getPostsPerCategory(category);
      setCurrentPosts(posts);
      setCurrentCategory(category);
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
            <CategorySelect changeCategory={PostsPerCategory} categories={categories} />
            <Pagination paginateFront={getNextPage} paginateBack={getPreviousPage} totalPosts={totalPosts} currentPage={currentPage} postsPerPage={postsPerPage} />
            <div className='flex flex-auto flex-wrap mt-5 -m-4 list'>
              {currentPosts.map((post) => {
                return <PostItem variant={""} className="item md:w-1/3" size={Size.Medium} post={post} key={`article__${post.slug}`} />
              })}
            </div>
            <Pagination paginateFront={getNextPage} paginateBack={getPreviousPage} totalPosts={totalPosts} currentPage={currentPage} postsPerPage={postsPerPage} />
          </div>
        </div>
    )
}

export default PostList;