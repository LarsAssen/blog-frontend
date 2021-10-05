import React from 'react'
import ArticeListStying from '../../styles/ArticleCardList.module.scss';
import Link from 'next/link'

type Post = {
    title: string,
    slug: string
  }

const PostItem: React.FC<{ post: Post}> = ({post}) => {
    return (
        <Link href="/post/[slug]" as={`/post/${post.slug}`} >
            <a className={ArticeListStying.card}>
                <h2 className={ArticeListStying.h2}>{post.title}</h2>
            </a>
        </Link>
    )
}

export default PostItem;
