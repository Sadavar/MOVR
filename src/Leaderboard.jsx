import React from 'react'
import './Leaderboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Leaderboard() {

    return (
        <div className="app">
            <div className="card">
                <h2 className="title">LEADERBOARD</h2>
                <div className="container">
                    <div className="list-container">
                        <FontAwesomeIcon icon={faUser} size='2xl' />
                        <div className="stats-container">
                            <div className="">
                                <div className="list-title">Emma Cherrin</div>
                            </div>
                            <div className="stat">
                                <FontAwesomeIcon icon={faRoad} />
                                <div>10.2km</div>
                            </div>
                            <div className="stat">
                                <FontAwesomeIcon icon={faClock} />
                                <div>41:05</div>
                            </div>
                        </div>
                    </div>
                    <div className="list-container">
                        <FontAwesomeIcon icon={faUser} size='2xl' />
                        <div className="stats-container">
                            <div className="">
                                <div className="list-title">Varun Sadasivam</div>
                            </div>
                            <div className="stat">
                                <FontAwesomeIcon icon={faRoad} />
                                <div>10.1km</div>
                            </div>
                            <div className="stat">
                                <FontAwesomeIcon icon={faClock} />
                                <div>41:05</div>
                            </div>
                        </div>
                    </div>
                    <div className="list-container">
                        <FontAwesomeIcon icon={faUser} size='2xl' />
                        <div className="stats-container">
                            <div className="">
                                <div className="list-title">Selina Liu (Me)</div>
                            </div>
                            <div className="stat">
                                <FontAwesomeIcon icon={faRoad} />
                                <div>10.2km</div>
                            </div>
                            <div className="stat">
                                <FontAwesomeIcon icon={faClock} />
                                <div>41:05</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Leaderboard