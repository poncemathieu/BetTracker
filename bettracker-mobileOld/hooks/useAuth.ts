import { useMutation } from "@tanstack/react-query"
import { useAuthStore } from "../store/authStore"
import { authService } from "../services/authService"
import { router } from "expo-router"

export const useLogin = () => {
    const setToken = useAuthStore((s) => s.setToken)
    const setUser = useAuthStore((s) => s.setUser)

    return useMutation({
        mutationFn: ({email, password}: {email: string, password: string}) =>
            authService.login(email, password),
        onSuccess: (data) => {
            setToken(data.token)
            setUser({
                email: data.email,
                firstName: data.firstName
            })
            router.replace('/(tabs)/dashboard')
        }
    })
}

export const useRegister = () => {
    const setToken = useAuthStore((s) => s.setToken)
    const setUser = useAuthStore((s) => s.setUser)

    return useMutation({
        mutationFn: ({email, password, firstName, lastName}: {
            email: string, 
            password: string, 
            firstName: string,
            lastName: string
        }) => authService.register(email, password, firstName, lastName),
        onSuccess: (data) => {
            setToken(data.token)
            setUser({
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
            })
            router.replace('/(onboarding)/welcome')
        }
    })
}