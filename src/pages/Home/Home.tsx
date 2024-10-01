import React, { useEffect } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { generateFootballClubs } from '../../utility/tests/generateFootballClubs';

const Home = () => {
    useEffect(() => {
        const generatedData = generateFootballClubs(
            {
                "id": "40bbb8c8-e7e4-4676-a7d0-6a6651fac0bf",
                "login": "test",
                "team": "",
                "stat": {
                    "matches": 0,
                    "goals": 0,
                    "passes": 0,
                    "tooks":  0,
                    "saves": 0,
                    "cost": 0
                }
            },
            "b8cff764-eb9b-4497-a5d2-30f6c8aee220"
        )

        console.info(`Teams:`, generatedData.teams)
        console.info(`Players in player team`, generatedData.players.filter(player => player.team === "b8cff764-eb9b-4497-a5d2-30f6c8aee220"))
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default Home