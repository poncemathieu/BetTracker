import { api } from "../app/lib/api"

interface CreateBetPayload {
    sport: string
    match: string
    bookmaker: string
    betType: string
    selection: string
    odds: number
    stake: number
    betDate: string // format ISO : "2026-03-31"
}


export const betService = {
    getBets: async () => {
        const response = await api.get('/bets')
        return response.data
    },

    createBet: async (payload: CreateBetPayload) => {
        const response = await api.post('/bets', payload)
        return response.data
    },

    updateBetStatus: async (betId: number, status: 'WON' | 'LOST' | 'PENDING' | 'CASHOUT') => {
        const response = await api.patch(`/bets/${betId}/status`, { status })
        return response.data
    },

    deleteBet: async (betId: number) => {
        const response = await api.delete(`/bets/${betId}`)
        return response.data
    }

}