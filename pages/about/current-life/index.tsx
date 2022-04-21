import CurrentlyWorkingOnList from '@/components/About/CurrentLife/CurrentlyWorkingOnList'
import CurrentlyWorkingOnTitle from '@/components/About/CurrentLife/CurrentlyWorkingOnTitle'
import { fetchAPI } from 'lib/api'
import React from 'react'

export async function getStaticProps(){
    const [currentLifeData] = await Promise.all([
      fetchAPI("/current-life-page"),
    ])

    return {
      props: {currentLifeData},
      revalidate: 10,
    };
  }

const CurrentLifePage:React.FC<{currentLifeData:any}> = ({currentLifeData}) => {
    return (
        <div className='text-gray-600 body-font'>
            <div className="container px-5 py-24 mx-auto">
                <CurrentlyWorkingOnTitle title={currentLifeData.data.attributes.Title} description={currentLifeData.data.attributes.Description} />
                <CurrentlyWorkingOnList />
            </div>
            <div className="text-center pb-5">
                <h2>{currentLifeData.data.attributes.UpdatedDate}</h2>
            </div>
        </div>
    )
}

export default CurrentLifePage
