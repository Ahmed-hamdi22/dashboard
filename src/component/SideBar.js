import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='side'>
      <Link to ="/dashboard/user" className='item-link'>user</Link>
    </div>
  )
}

export default SideBar
