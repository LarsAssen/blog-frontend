import Link from 'next/link';
import React from 'react'

type Category = {
    id: string,
    slug: string,
    name: string
  }

const CategoriesBar: React.FC<{categories:Category[]}> = ({categories}) => {
    return (
<nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
            <div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
                        <ul className="hidden md:flex items-center space-x-1">
                            {categories.map((category:Category) =>{
                                return (
                                    <li key={category.id} className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"><Link href="/category/[id]" as={`/category/${category.slug}`}><a>{category.name}</a></Link></li>
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
