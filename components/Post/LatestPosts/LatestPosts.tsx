import { Post } from 'Models/PostModel';
import React from 'react';
import PostItem from '../PostItem';


const LatestPosts: React.FC<{ posts: Post[]}> = ({posts}) => {
    return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {posts.map((post) => {
                    return <PostItem post={post} key={`article__${post.slug}`} />
                })}
            </div>
        </div>
    </section>
    )
}

export default LatestPosts;