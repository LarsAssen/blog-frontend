import React from 'react'
import Link from 'next/link'

type Post = {
    title: string,
    slug: string
  }

const PostItem: React.FC<{ post: Post}> = ({post}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Link href="/post/[slug]" as={`/post/${post.slug}`} >
            <a>
                <h2>{post.title}</h2>
            </a>
        </Link>
        </div>
    )
}

export default PostItem;
