import { motion } from 'framer-motion';
import { Post } from 'Models/PostModel';
import React from 'react';
import PostItem from '../PostItem/PostItemSmall';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

const LatestPosts: React.FC<{ posts: Post[]}> = ({posts}) => {
    return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <h2 className="text-3xl mb-7 text-blue-500">Latest posts</h2>
            <motion.div className="flex flex-auto flex-wrap -m-4" variants={container} initial="hidden" animate="visible">
                {posts.map((post) => {
                    return <PostItem post={post} key={`article__${post.slug}`} />
                })}
            </motion.div>
        </div>
    </section>
    )
}

export default LatestPosts;