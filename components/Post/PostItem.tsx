import React from 'react'
import Link from 'next/link'
import Images from "../Image/Image"

type ImageType ={
    alternativeText: string,
    name: string,
}

type Post = {
    title: string,
    slug: string,
    image: ImageType,
    description: string
  }

const PostItem: React.FC<{ post: Post}> = ({post}) => {
    return (
        <Link href="/post/[slug]" as={`/post/${post.slug}`} >
            <a>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div>
                    <Images image={post.image} />
                </div>
                <div>
                    <h2 className="text-xl text-indigo-500">{post.title}</h2>
                    <p className="text-gray-700">{post.description}</p>
                </div>
            </div>
            </a>
        </Link>
    )
}

export default PostItem;
