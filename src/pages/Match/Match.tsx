import React from "react";

export interface MatchProps {
    homeTeam: string
    awayTeam: string
}

const Match = (props: MatchProps) => {
    const {homeTeam, awayTeam} = props

    return(
        <div>
            {homeTeam} 0:0 {awayTeam}
        </div>
    )
}

export default Match