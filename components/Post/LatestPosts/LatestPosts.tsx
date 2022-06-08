import TitleBig from '@/components/UI/Title/TitleBig';
import { motion } from 'framer-motion';
import { Post } from 'Models/PostModel';
import React from 'react';
import PostItem from '../PostItem/PostItemSmall';

const list = {
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

const LatestPosts: React.FC<{ posts: Post[]}> = ({posts}) => {
    return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        {/* <h2 className="text-3xl mb-7 text-blue-500">Latest posts</h2> */}
        <TitleBig titleText='Latest posts' />
            <motion.div className="flex flex-auto flex-wrap mt-5 -m-4 list" variants={list} initial="hidden" animate="visible">
                {posts.map((post, index) => {
                    return <motion.div className="item md:w-1/3" variants={item} key={index}><PostItem className="item" variant={item} post={post} key={index} /></motion.div>
                })}
            </motion.div>
        </div>
    </section>
    )
}

export default LatestPosts;