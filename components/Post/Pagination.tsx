import React from 'react'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pagination:React.FC<{postsPerPage:number, totalPosts:number, paginateFront:Function, paginateBack:Function, currentPage:number}> = ({  postsPerPage,
    totalPosts,
    paginateFront,
    paginateBack,
    currentPage,}) => {

      
    return (
<div className='py-2'>
      <div>
        <p className='text-sm text-gray-700'>
          Showing 
          <span className='font-medium'> {currentPage * postsPerPage - 9} </span>
          to 
          <span className='font-medium'> {currentPage * postsPerPage} </span>
          of 
          <span className='font-medium'> {totalPosts} </span>
          results
        </p>
      </div>
      <nav className='block'></nav>
      <div>
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <a
            onClick={() => {
              paginateBack();
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border bg-white text-sm font-medium hover:bg-gray-50'
          >
            <FontAwesomeIcon className="text-main-color text-2xl" icon={faAngleLeft} />
          </a>

          <a
            onClick={() => {
              paginateFront();
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border bg-white text-sm font-medium hover:bg-gray-50'
          >
            <FontAwesomeIcon className="text-main-color text-2xl" icon={faAngleRight} />
          </a>
        </nav>
      </div>
    </div>
    )
}

export default Pagination
