import { Button, View, Text, StyleSheet } from "react-native"
import { Link, useRouter } from "expo-router"

export default function LoginScreen() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Link href="/home">
                <Button title="Home" />
            </Link>
            <Button title="Cadastrar" onPress={() => router.push("/signup")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    }
})