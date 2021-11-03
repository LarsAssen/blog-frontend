import React from 'react'
import Link from 'next/link'
import Image from "../Image/Image"

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
                <div className="p-10">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div>
                            <Image image={post.image} />
                        </div>
                        <div className="px-6 py-4">
                            <h2 className="text-xl mb-2 font-bold text-indigo-500">{post.title}</h2>
                            <p className="text-gray-700 text-base">{post.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default PostItem;
