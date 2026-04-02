import { Redirect } from "expo-router";
import { useAuthStore } from "../store/authStore";

export default function Index() {
    const token = useAuthStore((s) => s.token)
    const onboardingCompleted = useAuthStore((s) => s.onboardingCompleted)

    if (token && onboardingCompleted) {
        return <Redirect href="/(tabs)/dashboard" />
    } else if (token && !onboardingCompleted) {
        return <Redirect href="/onboarding" />
    } else {
        return <Redirect href="/(auth)/login" />
    }
}