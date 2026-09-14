import { Button, View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
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
    }
})