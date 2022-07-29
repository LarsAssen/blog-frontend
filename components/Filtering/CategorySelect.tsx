import Category from 'Models/CategoryModel'
import React from 'react'

const CategorySelect:React.FC<{categories: Category[], changeCategory: any}> = ({categories, changeCategory}) => {
  return (
    <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Select category</label>
        <select onChange={e => changeCategory(e.target.value)} className="block appearance-none bg-white text-gray-700 py-3 px-4 pr-8 rounded-xl shadow-xl border-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            {categories.map((category, index) => {
                return <option key={index}>{category.name}</option>
            }
            )}
        </select>
    </div>
  )
}

export default CategorySelect