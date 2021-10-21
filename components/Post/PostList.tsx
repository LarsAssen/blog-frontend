import React from 'react';
import PostItem from './PostItem';


type ImageType ={
  alternativeText: string,
  name: string,
}

type Post = {
  title: string,
  slug: string,
  image: ImageType
}

const PostList: React.FC<{ posts: Post[]}> = ({posts}) => {
    console.log(posts);
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
            {posts.map((post) => {
          return <PostItem post={post} key={`article__${post.slug}`} />
        })}
        </div>
        </div>
    )
}

export default PostList;