import { Button, View, Text, StyleSheet } from "react-native"
import { Link, useRouter } from "expo-router"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function handleLogin() {

    const router = useRouter()

    const handleLogin = async () => {
        // usar a variável do token depois de logar no backend
        await AsyncStorage.setItem("token", "__SAMPLE__23423ERT#$#$%__TOKEN__")
        router.push("/home") 
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title="Entrar" onPress={handleLogin} />
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