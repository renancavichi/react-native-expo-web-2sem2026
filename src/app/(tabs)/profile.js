import { Button, View, Text, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function ProfileScreen() {
    const router = useRouter()

    const handleLogout = async () => {
        await AsyncStorage.removeItem("token")
        router.navigate("/login")
    }

    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Button title="Sair" onPress={handleLogout} />
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