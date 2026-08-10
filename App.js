import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image 
          style={styles.logo} 
          source={'https://cdn.vectorstock.com/i/500p/66/46/justice-scales-logo-law-amp-legal-vector-27726646.jpg'}
        />
        <Text>Meu App</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.carUser}>
          <Image 
            style={styles.avatar} 
            source={'https://github.com/renancavichi.png'}
          />
          <View style={styles.userDetails}>
            <Text style={styles.name}>Renan Cavichi</Text>
            <Text style={styles.email}>renancavichi@gmail.com</Text>
          </View>
        </View>
        <View style={styles.carUser}>
          <Image 
            style={styles.avatar} 
            source={'https://github.com/bianca.png'}
          />
          <View style={styles.userDetails}>
            <Text style={styles.name}>Maria Silva</Text>
            <Text style={styles.email}>mariasilva@gmail.com</Text>
          </View>
        </View>
        <View style={styles.carUser}>
          <Image 
            style={styles.avatar} 
            source={'https://github.com/robert.png'}
          />
          <View style={styles.userDetails}>
            <Text style={styles.name}>John</Text>
            <Text style={styles.email}>john@gmail.com</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6670f5',
    flex: 1,
  },
  box:{
    flex: 1,
    backgroundColor: '#f9e895',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  box2:{
    flex: 5,
    backgroundColor: '#5bd54e',
  },
  logo:{
    width: 100,
    height: 100
  },
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
