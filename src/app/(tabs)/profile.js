import { Button, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Button title="Sair" onPress={() => router.navigate("/login")} />
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