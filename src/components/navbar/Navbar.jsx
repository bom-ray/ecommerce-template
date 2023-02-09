import { Home, SearchOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <div className='navbar' >
      <div className="title"><h2>Bonik</h2></div> 
      <div className="search">
        <SearchOutlined/>
        <input type="text" placeholder='Search and hit Enter' />
        </div> 
        <div className="items">
          <span><VerifiedUserOutlined className='icons' /></span>
          <span>
          <span className='notify'>1</span>
          <Home className='icons' />
          </span>
        </div>
    </div>
  )
}

export default Navbar