import React from 'react'
import AppStat from './AppStat'
import StatusBoard from './StatusBoard';

const MainBody = () => {
  return (
    <>
      <div className='Main_body_item'>
        <p className='Main_body_child_p'>
          Welcom Team!<br/>{new Date().toDateString()}</p>
         <AppStat/>
         <StatusBoard/>
      </div>
    </>
  )
}

export default MainBody
