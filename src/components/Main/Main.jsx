import React from 'react'
import { assets } from '../../assets/assets'
import '../Main/Main.css';

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Forntier-ui </p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev..</span></p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see in France</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly explain the topic : Learning rate in ml</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of my code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main