import React from 'react'
import Link from 'next/link'

type Post = {
    title: string,
    slug: string
  }

const PostItem: React.FC<{ post: Post}> = ({post}) => {
    return (
        <Link href="/post/[slug]" as={`/post/${post.slug}`} >
            <a>
                <h2>{post.title}</h2>
            </a>
        </Link>
    )
}

export default PostItem;
