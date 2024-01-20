// import React from 'react';
import Vitals from './Vitals'
import Map from './Map';
import Leaderboard from './Leaderboard';
import Profile from './Profile'
import {Distance} from './Distance';
import './index.css'


export default function Dashboard() {
    // Grid 5x5
    return (
        <>
            <div className="Dashboard">
                <Profile />
                <Vitals />
                <div className='dash-bot'>
                    <Map />
                    <Leaderboard />
                    <Distance/>
                </div>
            </div>
        </>
    )
}