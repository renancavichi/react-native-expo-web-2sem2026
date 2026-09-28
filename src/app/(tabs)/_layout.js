import { StyleSheet } from "react-native"
import {Tabs} from "expo-router"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { BlurView } from 'expo-blur'

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            // Mais opções de configuração podem ser adicionadas aqui
            // https://reactnavigation.org/docs/bottom-tab-navigator#options
            headerShown: false,
            tabBarActiveTintColor: "#f36715",
            tabBarInactiveTintColor: "#c2c2c2",
            tabBarIconStyle: { marginBottom: -3 },
            tabBarStyle: { position: 'absolute' },
            tabBarBackground: () => (
                <BlurView tint="light" intensity={30} style={StyleSheet.absoluteFill} />
            )
        }}>
            <Tabs.Screen 
                name="home" 
                options={{ 
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ) 
                }} 
            />
            <Tabs.Screen 
                name="profile" 
                options={{ 
                    title: "Perfil",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    )
                }} 
            />
        </Tabs>
    )
}