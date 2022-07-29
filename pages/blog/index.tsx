import React from 'react'
import PostList from '../../components/Post/PostList/PostList';
import { fetchAPI } from 'lib/api';
import Post from 'Models/PostModel';
import { getPostsPerPage, getTotalPostsCount } from 'services/postServices/postService';
import CategorySelect from '@/components/Filtering/CategorySelect';
import { GetCategories } from 'services/categoryServices/categoryService';
import Category from 'Models/CategoryModel';


  export async function getStaticProps(){
    const [posts, categories, postsCount,  blog] = await Promise.all([
      getPostsPerPage(1, 10),
      GetCategories(),
      getTotalPostsCount(),
      fetchAPI("/blog-page"),
    ])

    return {
      props: {posts, categories, postsCount, blog},
      revalidate: 10,
    };
  }

const Blog: React.FC<{ posts: Post[], categories:Category[], postsCount:any, blog:any}> = ({posts, categories, postsCount, blog}) => {
    return (
        <div>
          <PostList categories={categories} posts={posts} totalPosts={postsCount.totalPostsCount} totalPages={postsCount.pageCount} />
        </div>
    )
}

export default Blog
