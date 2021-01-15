import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    'spotify-bold': require('./assets/fonts/Proxima-Nova-Bold.otf'),
    'spotify-thin': require('./assets/fonts/Proxima-Nova-Thin.otf'),
    'spotify-regular': require('./assets/fonts/ProximaNova-Regular.otf')
  })

  let loggingIn = () => {
    alert('Logging in with Spotify!')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Playlist Maker</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>Create a playlist using your Spotify Liked Songs!</Text>
      </View>
      <TouchableOpacity style={styles.login} onPress={loggingIn}>
        <Text style={{fontFamily: 'spotify-regular', fontSize: 20, }}>Connect with Spotify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    // backgroundColor: 'red',
    bottom: '30%'
  },
  title: {
    fontSize: 70,
    color: 'white',
    fontFamily: 'spotify-bold'
  },
  body: {
    // backgroundColor: 'blue',
    bottom: '27%'
  },
  description: {
    fontFamily: 'spotify-thin',
    fontSize: 20,
    color: '#b3b3b3'
  },
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1db954',
    height: '60px',
    width: '450px',
    borderRadius: '40px',
    bottom: '15%'
  },
});
