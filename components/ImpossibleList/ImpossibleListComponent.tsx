import React from 'react'

type ImpossibleListItem ={
    title: string,
    description: string
}

const ImpossibleListComponent:React.FC<{list:ImpossibleListItem[]}> = ({list}) => {
    return (
        <div>
            <ul>
                
            </ul>
        </div>
    )
}

export default ImpossibleListComponent
