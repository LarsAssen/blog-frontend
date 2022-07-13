import React from 'react'
import PostList from '../../components/Post/PostList/PostList';
import { fetchAPI } from 'lib/api';
import Post from 'Models/PostModel';


  export async function getStaticProps(){
    const [postsData, blog] = await Promise.all([
      fetchAPI("/posts"),
      fetchAPI("/blog-page"),
    ])

    const posts = postsData.data.map((post:any) => {
      return { 
        id: post.id,
        title: post.attributes.Title, 
        slug: post.attributes.Slug,
        image: post.attributes.Image.data.attributes,
        description: post.attributes.Description,
        category: post.attributes.category,
        tags: post.attributes.tags.data,
        published_at: post.attributes.publishedAt
        } as Post
    }
    )

    return {
      props: {posts, blog},
      revalidate: 10,
    };
  }

const Blog: React.FC<{ posts: Post[], blog:any}> = ({posts, blog}) => {

    return (
        <div>
          <PostList posts={posts} />
        </div>
    )
}

export default Blog
