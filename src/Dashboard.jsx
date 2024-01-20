// import React from 'react';
import Vitals from './Vitals'
import Map from './Map';
import Leaderboard from './Leaderboard';
import {Distance} from './Distance';


export default function Dashboard() {
    // Grid 5x5
    return (
        <>
            <div className="Dashboard">
                <Vitals />
                <Map />

                {/* <Map /> */}
                <Leaderboard />
                <Distance/>
            </div>
        </>
    )
}