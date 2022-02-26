import React from 'react'
import Link from 'next/link'
import { Post } from 'Models/PostModel'
import { PostTag } from 'Models/PostTag'
import Tag from './PostTag'
import PostCategory from './PostCategory'
import Images from '../Image/Image'

const PostItem: React.FC<{ post: Post}> = ({post}) => {
    return (
        <Link href="/post/[slug]" as={`/post/${post.slug}`} >
            <a>
                <div className="w-full lg:max-w-full lg:flex p-2">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div>
                            <Images image={post.image} />
                        </div>
                        <PostCategory categoryName={post.category["name"]} />
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
                        {post.tags.map((tag:PostTag) => {
                        return <Tag key={tag.id} tagName={tag.Name} />
                        })}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default PostItem;
