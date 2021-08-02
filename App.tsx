import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';






export default function App() {

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
