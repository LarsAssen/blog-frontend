import CurrentlyWorkingOnList from '@/components/About/CurrentLife/CurrentlyWorkingOnList'
import CurrentlyWorkingOnTitle from '@/components/About/CurrentLife/CurrentlyWorkingOnTitle'
import TitleBig from '@/components/UI/Title/TitleBig'
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
          <div className="container px-5 py-24 mx-auto">
            <TitleBig titleText={currentLifeData.data.attributes.Title} />
            <p>{currentLifeData.data.attributes.Description}</p>
            <CurrentlyWorkingOnList />
            <div className="text-center pb-5">
                <h2>{currentLifeData.data.attributes.UpdatedDate}</h2>
            </div>
          </div>
    )
}

export default CurrentLifePage
