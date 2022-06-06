import TitleSmall from '@/components/UI/Title/TitleSmall'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const CurrentlyWorkingOnItem:React.FC<{title:string, description:string, items: string[]}> = ({title, description, items}) => {
  return (
    <div className="xl:w-1/2 border rounded-xl p-2 shadow-xl md:w-1/2">
    <div className="p-6 rounded-lg">
      <TitleSmall titleText={title} />
      <p>{description}</p>
      <ul>
        {items.map(item => {
          return (
          <p key={item}>
          <FontAwesomeIcon className='text-main-color' icon={faBolt} />
          <span className=''> {item}</span>
          </p>
          )
        })}
      </ul>
    </div>
  </div>
  )
}

export default CurrentlyWorkingOnItem