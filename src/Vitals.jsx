import React from 'react'
import Heart from './assets/pngimg.com - heart_PNG51335.png'
import Calories from './assets/cal_graph.png'
import Incline from './assets/incline_graph.png'
import Speed from './assets/speed_graph.png'
import './index.css'

const Vitals = () => {
  return (
    <div className='vital-list'>
        <div className='vital-item'>
            <h2>HEART RATE</h2>
            <img src={Heart} alt="heart-img" className='vital-img'/>
            <p>120 BPM</p>
        </div>
        <div className='vital-item'>
            <h2>CALORIES</h2>
            <img src={Calories} alt="calories-img" className='vital-img'/>
            <p>100 Calories</p>
        </div>
        <div className='vital-item'>
            <h2>TIME LAPSED</h2>
            <p>50:20</p>
        </div>
        <div className='vital-item'>
            <h2>INCLINE</h2>
            <img src={Incline} alt="calories-img" className='vital-img'/>
            <p>4</p>
        </div>
        <div className='vital-item'>
            <h2>SPEED</h2>
            <img src={Speed} alt="calories-img" className='vital-img'/>
            <p>3</p>
        </div>
    </div>
  )
}

export default Vitals