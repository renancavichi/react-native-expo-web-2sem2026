import { View, Text, StyleSheet, ActivityIndicator} from "react-native"
import { Image } from "expo-image"
import { useEffect } from 'react'
import { useRouter } from "expo-router"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function LoadingScreen() {
    const router = useRouter();

    useEffect(() => {
        const checkLogin = async () => {
            const token = await AsyncStorage.getItem("token")
            if (token) {
                router.replace('/home')
            } else {
                router.replace('/login')
            }
        }

        setTimeout(() => {checkLogin()}, 2000);
    }, [])

    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={'https://i.pinimg.com/736x/0c/32/97/0c3297f3516a415219c7e89e16a4a3d2.jpg'}
            />
            <Text>IFFLIX</Text>
            <ActivityIndicator size="large" color="#000000"/>
            <Text>Carregando...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    logo: {
        width: 200,
        height: 200
    }
})