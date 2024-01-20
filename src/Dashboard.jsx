// import React from 'react';
import Vitals from './Vitals'
import Map from './Map';
import Leaderboard from './Leaderboard';
import Stats from './Stats'


export default function Dashboard() {
    // Grid 5x5
    return (
        <>
            <div className="Dashboard">
                <Vitals />
                <Map />

                {/* <Map /> */}
                <Leaderboard />
            </div>
        </>
    )
}