import React from 'react'
import './index.css'

const Vitals = () => {
  return (
    <div className='vital-list'>
        <div className='vital-item'>
            <h2>HEART RATE</h2>
            <p>120 BPM</p>
        </div>
        <div className='vital-item'>
            <h2>CALORIES</h2>
            <p>100 Calories</p>
        </div>
        <div className='vital-item'>
            <h2>TIME LAPSED</h2>
            <p>50:20</p>
        </div>
        <div className='vital-item'>
            <h2>INCLINE</h2>
            <p>4</p>
        </div>
        <div className='vital-item'>
            <h2>SPEED</h2>
            <p>3</p>
        </div>
    </div>
  )
}

export default Vitals