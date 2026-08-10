import { StyleSheet, Text, View, Image } from 'react-native'

export default function CardUser({ avatar, name, email }) {
    return(
        <View style={styles.carUser}>
            <Image 
                style={styles.avatar} 
                source={avatar}
            />
            <View style={styles.userDetails}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  carUser: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userDetails: {
    gap: 5
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: '#4f4f4f',
  }
});