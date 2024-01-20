

function Leaderboard() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
                width: '20vw',
                height: '50vh',
                borderRadius: '20px',
                background: '#2B2B2B',
                marginTop: '5vh',
            }}>
                <h1 style={{
                    color: 'white',
                    textAlign: 'center'

                }}>LEADERBOARD</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        paddingRight: '10px',
                    }}>icon</div>
                    <div>
                        <div>
                            <h1 style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: '20px'
                            }}>John Doe</h1>
                        </div>
                        <div>
                            temp
                        </div>
                        <div>
                            temp
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Leaderboard