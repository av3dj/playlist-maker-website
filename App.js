import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import Particles from './src/components/Particles';
import { BrowserRouter as Router} from 'react-router-dom';
import HoverableOpacity from './src/components/HoverableOpacity';

export default function App() {

  let [fontsLoaded] = useFonts({
    'spotify-bold': require('./src/assets/fonts/Proxima-Nova-Bold.otf'),
    'spotify-thin': require('./src/assets/fonts/Proxima-Nova-Thin.otf'),
    'spotify-regular': require('./src/assets/fonts/ProximaNova-Regular.otf')
  })

  let loggingIn = () => {
    alert('Logging in with Spotify!')
  }

  return (
    <View style={ styles.container }>
      <Router>
        <div style={{ position: 'fixed', }}>
          <Particles />

          <View style={{ position: 'absolute', top: '50%', left: '50%', width: '50%', height: '50%', transform: 'translate(-50%, -50%)', alignItems: 'center', }}>
            <View>
              <Text style={ styles.title }>Playlist Maker</Text>
            </View>
            <View>
              <Text style={ styles.description }>Create a playlist using your Spotify Liked Songs!</Text>
            </View>
            <HoverableOpacity style={ StyleSheet.flatten(styles.login) } onHover={{ ...StyleSheet.flatten(styles.login), backgroundColor: '#4ac776' }} onPress={ loggingIn }>
              <Text style={{ fontFamily: 'spotify-regular', fontSize: 20, }}>Connect with Spotify</Text>
            </HoverableOpacity>
          </View>
        </div>
      </Router>
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
  title: {
    fontSize: 70,
    color: 'white',
    fontFamily: 'spotify-bold'
  },
  description: {
    fontFamily: 'spotify-thin',
    fontSize: 20,
    color: '#b3b3b3'
  },
  login: {
    backgroundColor: '#1db954',
    height: '60px',
    width: '450px',
    borderRadius: '40px',
    top: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
