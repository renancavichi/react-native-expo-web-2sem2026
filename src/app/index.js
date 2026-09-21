import { Button, View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { Link } from "expo-router"
import { Image } from "expo-image"
import { useEffect } from 'react'
import { useRouter } from "expo-router"

export default function LoadingScreen() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {router.replace('/login')}, 2000);
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
            <Link href="/login">
                <Button title="Login" />
            </Link>
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