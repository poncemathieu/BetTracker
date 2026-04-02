import { api } from "../app/lib/api";

export const authService = {
    login: async (email: string, password: string) => {
        const response = await api.post('/api/auth/login', { email, password });
        return response.data;
    },

    register: async (email: string, password: string, firstName: string, lastName: string) => {
        const response = await api.post('/api/auth/register', { email, password, firstName, lastName });
        return response.data;
    }
};