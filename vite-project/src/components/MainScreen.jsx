import React from 'react'
import Header from '../components/Header'
import BigAccordion from '../components/BigAccordion'
import IfoImage from '../components/IfoImage'

const MainScreen = () => {
  return (
    <>
    <div className="text-bg-primary">
    <Header />
      <BigAccordion />
    </div>
      {/* <LeadsButtons /> */}
    <IfoImage />
    </>
  )
}

export default MainScreen