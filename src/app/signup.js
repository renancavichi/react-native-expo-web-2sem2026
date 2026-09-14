import { Button, View, Text, StyleSheet } from "react-native";
import {useRouter} from "expo-router";

export default function SignupScreen() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text>Cadastrar</Text>
            <Button title="Login" onPress={() => router.push("/login")} />
            <Button title="Home" onPress={() => router.push("/home")} />
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