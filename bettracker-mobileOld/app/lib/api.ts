import axios from 'axios'
import { useAuthStore } from '../../store/authStore'


export const api = axios.create({
    baseURL: 'http://192.168.0.146:8080', // Android emulator -> localhost
})

api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})