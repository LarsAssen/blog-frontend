import Link from 'next/link';
import React from 'react'

type Category = {
    id: string,
    slug: string,
    name: string
  }

const CategoriesBar: React.FC<{categories:Category[]}> = ({categories}) => {
    return (
<nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
            <ul className="hidden md:flex items-center space-x-1">
                {categories.map((category:Category) =>{
                    return (
                        <li key={category.id} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"><Link href="/category/[id]" as={`/category/${category.slug}`}><a>{category.name}</a></Link></li>
                    );
                })}
            </ul>
            </div>
            </div>
            </div>
        </nav>
    )
}

export default CategoriesBar