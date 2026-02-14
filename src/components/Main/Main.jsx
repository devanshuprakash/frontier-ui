import React from 'react'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Forntier-ui </p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <p><span>Hello,user</span></p>
      </div>
    </div>
  )
}

export default Main