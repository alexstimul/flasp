import { Player } from "../../models/player";
import { Team } from "../../models/team"
import { players } from "./mockedObjects/players";
import { teams } from "./mockedObjects/teams";

const randomizeIndex = (count: number) => {
    return Math.floor(count * Math.random());
}

const MAX_PLAYERS_IN_TEAM = 5

export const generateFootballClubs = (player: Player, teamId: string): { teams: Team[], players: Player[] } => {
    const generatedTeams: Team[] = []
    const generatedPlayers: Player[] = []

    // индексы спортсменов
    const guardian = new Set()

    const playerTeam = teams.find(team => team.id === teamId)
    const filteredTeams = teams.filter(team => team.id !== teamId)

    if (!playerTeam) return { teams: generatedTeams, players: generatedPlayers }

    playerTeam.capitan = player.id
    player.team = playerTeam.id

    generatedPlayers.push(player)

    let countInTeam = 1

    // TODO убрать дублирование кода
    while (countInTeam < MAX_PLAYERS_IN_TEAM) {
        const index = randomizeIndex(players.length)
        if (guardian.has(index)) {
            continue
        }

        guardian.add(index)
        countInTeam++
        
        const _player = players[index]
        _player.team = teamId

        if (!playerTeam.vice_capitan) playerTeam.vice_capitan = _player.id

        generatedPlayers.push(_player)
    }

    generatedTeams.push(playerTeam)

    countInTeam = 0

    for(const team of filteredTeams) {
        while (countInTeam < MAX_PLAYERS_IN_TEAM) {
            const index = randomizeIndex(players.length)
            if (guardian.has(index)) {
                continue
            }

            guardian.add(index)
            countInTeam++
            
            const _player = players[index]
            _player.team = team.id

            if (!team.capitan) team.capitan = _player.id
            if (!team.vice_capitan) team.vice_capitan = _player.id

            generatedPlayers.push(_player)
        }

        countInTeam = 0
        generatedTeams.push(team)
    }

    return {
        teams: generatedTeams,
        players: generatedPlayers
    }
}