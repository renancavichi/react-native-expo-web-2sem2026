import { Button, View, Text, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {useProfileStore} from "../../stores/profileStore.js"
import {Image} from "expo-image"

export default function ProfileScreen() {
    const router = useRouter()
    const {name, avatar} = useProfileStore()

    const handleLogout = async () => {
        await AsyncStorage.removeItem("token")
        router.navigate("/login")
    }

    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Text>Nome: {name}</Text>
            <Image source={avatar} style={{width: 100, height: 100, borderRadius: 50}} />
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