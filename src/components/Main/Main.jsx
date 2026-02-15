import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css';

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
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Type your message here...' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
              
            </div>
          </div>
          <p className='bottom-info'>
            Try my may powerful prdiction model,made using various ml algorithms and trained on a large dataset to provide accurate and insightful predictions
          </p>
      </div>
    </div>
    </div>
  )
}

export default Main