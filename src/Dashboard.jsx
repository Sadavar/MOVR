import Map from './Map';
import Leaderboard from './Leaderboard';

export default function Dashboard() {
    // Grid 5x5
    return (
        <>
            <div className="Dashboard">
                {/* <Map /> */}
                <Leaderboard />
            </div>
        </>
    )
}