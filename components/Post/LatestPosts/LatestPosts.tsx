import { Post } from 'Models/PostModel';
import React from 'react';
import PostItem from '../PostItem/PostItemSmall';


const LatestPosts: React.FC<{ posts: any[]}> = ({posts}) => {
    return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <h2 className="text-3xl mb-7 text-blue-500">Latest posts</h2>
            <div className="flex flex-auto flex-wrap -m-4">
                {posts.map((post) => {
                    return <PostItem post={post} key={`article__${post.attributes.Slug}`} />
                })}
            </div>
        </div>
    </section>
    )
}

export default LatestPosts;