import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import store from 'firebase/storage';
import firebase from 'firebase';
import apiKeys from './config/keys';


export default function App() {
  
  
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseConfig);
    
  }
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [isLogedIn, setIsLogedIn] = useState(false);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        
        <Navigation colorScheme={colorScheme} isLogedIn={isLogedIn}/>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
