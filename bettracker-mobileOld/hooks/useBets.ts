import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { betService } from "../services/betService"

export const useBets = () => {
    return useQuery({
        queryKey: ['bets'],
        queryFn: betService.getBets
    })
}

export const useCreateBet = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: betService.createBet,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['bets']})
        },
    })
}

export const useUpdateBetStatus = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({betId, status}: {betId: number, status: 'WON' | 'LOST' | 'PENDING' | 'CASHOUT'}) => 
            betService.updateBetStatus(betId, status),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['bets']})
        },
    })
}

export const useDeleteBet = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: betService.deleteBet,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['bets']})
        },
    })
}