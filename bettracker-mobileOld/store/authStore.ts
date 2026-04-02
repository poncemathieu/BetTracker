import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface User {
    email: string
    firstName: string
    lastName?: string
}

interface AuthState {
    token: string | null
    user: User | null
    onboardingCompleted?: boolean
    setToken: (token: string) => void
    setUser: (user: User) => void
    setOnboardingCompleted: () => void
    logout: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            user: null,
            onboardingCompleted: false,
            setToken: (token) => set({token} as Partial<AuthState>),
            setUser : (user) => set({user} as Partial<AuthState>),
            setOnboardingCompleted: () => set({onboardingCompleted: true} as Partial<AuthState>),
            logout: () => set({token: null, user: null} as Partial<AuthState>),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)

