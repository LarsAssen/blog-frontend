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
                <div className="w-full lg:max-w-full lg:flex p-2">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div>
                            <Image image={post.image} />
                        </div>
                        <div className="px-6 py-4">
                            <div className="container h-10">
                                <h2 className="text-xl mb-2 font-bold text-blue-500">{post.title}</h2>
                            </div>
                            <div>
                                <p className="text-gray-700 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">{post.description}</p>
                            </div>
                            
                        </div>
                        <div className="px-6 pt-4 pb-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Read more
                        </button>
                        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span> */}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default PostItem;
