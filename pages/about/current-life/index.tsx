import CurrentlyWorkingOnList from '@/components/About/CurrentLife/CurrentlyWorkingOnList'
import Title from '@/components/UI/Title/Title'
import { fetchAPI } from 'lib/api'
import Size from 'Models/Enums/Size'
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
  const workingOn:string[] = currentLifeData.data.attributes.WorkingOnText.toString().split(',')
  const priorities:string[] = currentLifeData.data.attributes.PrioritiesList.toString().split(',')

    return (
          <div className="container px-5 py-24 mx-auto">
            <Title size={Size.Large} text={currentLifeData.data.attributes.Title} />
            <p>{currentLifeData.data.attributes.Description}</p>
            <CurrentlyWorkingOnList workingOn={workingOn} priorities={priorities} />
            <div className="text-left pt-5 pb-5">
                <h2>{currentLifeData.data.attributes.UpdatedDate}</h2>
            </div>
          </div>
    )
}

export default CurrentLifePage
