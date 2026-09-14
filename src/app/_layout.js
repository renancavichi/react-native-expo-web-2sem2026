import { Stack } from "expo-router"

export default function RootLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false }} />
            <Stack.Screen name="login" options={{ title: "Login", headerShown: true }} />
            <Stack.Screen name="signup" options={{ title: "Cadastrar", headerShown: true }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}