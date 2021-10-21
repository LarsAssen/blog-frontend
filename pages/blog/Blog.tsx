import React from 'react'
import Head from 'next/head';
import PostList from '../../components/Post/PostList';


type ImageType ={
    alternativeText: string,
    name: string,
}

type Post = {
    title: string,
    slug: string,
    image: ImageType
  }


const Blog: React.FC<{ posts: Post[]}> = (props) => {
    const { posts } = props;
    return (
        <div>
            <h1>Blog page</h1>
            <PostList posts={posts} />
        </div>
    )
}

export default Blog
