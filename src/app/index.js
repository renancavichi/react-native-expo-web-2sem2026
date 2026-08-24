import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import CardUser from '../components/CardUser'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image 
          style={styles.logo} 
          source={'https://cdn.vectorstock.com/i/500p/66/46/justice-scales-logo-law-amp-legal-vector-27726646.jpg'}
        />
        <Text>Home Teste</Text>
      </View>
      <View style={styles.box2}>
        <CardUser 
          avatar={'https://github.com/renancavichi.png'}
          name={'Renan Cavichi'}
          email={'renancavichi@gmail.com'}
        />
        <CardUser 
          avatar={'https://github.com/bianca.png'}
          name={'Bianca'}
          email={'bianca@gmail.com'}
        />
        <CardUser 
          avatar={'https://github.com/robert.png'}
          name={'Robert'}
          email={'robert@gmail.com'}
        />
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
  }
});
