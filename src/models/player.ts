export interface Player {
    id: string
    login: string
    team: string // id of Team
    stat: PlayerStat
}

export interface PlayerStat {
    matches: number
    goals: number
    passes: number
    tooks: number // отб
    saves: number

    cost: number
}