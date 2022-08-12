import Title from '@/components/UI/Title/Title';
import Post from 'Models/PostModel';
import React from 'react';
import Pagination from '../Pagination';
import PostItem from '../PostItem/PostItem';
import { getPostsPerCategory, getPostsPerPage, getTotalPostsCount } from 'services/postServices/postService';
import Category from 'Models/CategoryModel';
import CategorySelect from '@/components/Filtering/CategorySelect';
import Size from 'Models/Enums/Size';
import { getNumberOfPostsPerCategory } from 'services/categoryServices/categoryService';

const PostList: React.FC<{ posts: Post[], categories:Category[], totalPosts:number}> = ({posts, categories, totalPosts}) => {
  const [currentPosts, setCurrentPosts] = React.useState(posts);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentCategory, setCurrentCategory] = React.useState('');
  const [postsPerPage] = React.useState(12);
  const [totalPages, setTotalPages] = React.useState(Math.ceil(totalPosts / postsPerPage));
  const [postCount, setPostCount] = React.useState(totalPosts);
  const getNextPage = async () => {
    console.log("testing " ,currentPage )
    console.log("testing 2" ,totalPages )
    if (currentPage < totalPages) {
      console.log("next page")
      const nextPage = currentPage + 1;
      const nextPosts = await getPostsPerPage(nextPage, postsPerPage, currentCategory);
      setCurrentPosts(nextPosts);
      setCurrentPage(nextPage);
    }
    return;
  }

  const getPreviousPage = async () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      const previousPosts = await getPostsPerPage(previousPage, postsPerPage, currentCategory);
      setCurrentPosts(previousPosts);
      setCurrentPage(previousPage);
    }
    return;
    }

    const PostsPerCategory = async (category:string) => {
      var numberOfPosts = postCount;
      if(!category){
        var postsByCategory = await getPostsPerPage(1, postsPerPage, "");
        var total = await getTotalPostsCount();
        console.log("total", total)
        setPostCount(total.totalPostsCount);
      } else{
        var postsByCategory = await getPostsPerCategory(category);
        numberOfPosts = await getNumberOfPostsPerCategory(category);
        setPostCount(numberOfPosts);
      }
      setCurrentPosts(postsByCategory);
      setCurrentCategory(category);
      setTotalPages(Math.ceil(postCount / postsPerPage));
      console.log("total pages", totalPages)
    }

  
  const getPage = async (page:number) => {
    setCurrentPage(page);
    const nextPosts = await getPostsPerPage(page, postsPerPage, currentCategory);
    setCurrentPosts(nextPosts);
  }
    return (
        <div className="text-gray-600 body-font overflow-hidden">
          <div className='container px-5 py-24 mx-auto'>
            <Title size={Size.Large} text="Blog" />
            <CategorySelect changeCategory={PostsPerCategory} categories={categories} />
            <Pagination paginateFront={getNextPage} paginateBack={getPreviousPage} totalPosts={postCount} currentPage={currentPage} postsPerPage={postsPerPage} />
            <div className='flex flex-auto flex-wrap mt-5 -m-4 list'>
              {currentPosts.map((post) => {
                return <PostItem variant={""} className="item md:w-1/3" size={Size.Medium} post={post} key={`article__${post.slug}`} />
              })}
            </div>
            <Pagination paginateFront={getNextPage} paginateBack={getPreviousPage} totalPosts={postCount} currentPage={currentPage} postsPerPage={postsPerPage} />
          </div>
        </div>
    )
}

export default PostList;