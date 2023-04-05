import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../Topbar'
import SideBar from './SideBar'


const Dashboard = () => {
  return (
   
      <div>
        <Topbar/>
      <div className=' contant'>
      <SideBar/>
<div style={{width:"80%" }}>
 <Outlet />
</div>
      </div>
      </div>
    
  )
}

export default Dashboard
