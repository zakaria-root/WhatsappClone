/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';


import Colors  from '../constants/Colors';
import { 
      EvilIcons, 
      Feather,
      FontAwesome5,
      MaterialCommunityIcons,
      MaterialIcons,
    } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { View } from '../components/Themed';
import screenChatRom from '../screens/screenChatRom';
import screenContacts from '../screens/screenContacts';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      
      headerStyle:{
        backgroundColor: Colors.light.tint,
        shadowOpacity : 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleStyle:{
        fontWeight: '500',
      }
      
    }}
    >

      <Stack.Screen 
      name="Root" 
      component={MainTabNavigator} 
      options={{ 
        title: 'Whatsapp',
        headerRight: () => (
          <View style={{ 
              backgroundColor: '#006938',
              width:60, 
              justifyContent : 'space-between',
              flexDirection: 'row',
              marginRight:10,
              
                }}>
              
            <Feather name="search" size={24} color="white" />
            <Feather name="more-vertical" size={24} color="white" />
          </View>
        )
       }}
      />
      <Stack.Screen 
      name="ChatRom" 
      component={screenChatRom} 
      options={({ route }) => ({ 
        title: route.params.name,
        headerRight:() => (

          <View style={{ 
              backgroundColor: '#006938',
              width:110, 
              justifyContent : 'space-between',
              flexDirection: 'row',
              marginRight:10, 
              }}>
            <FontAwesome5 name="video" size={24} color="white" />
            <MaterialIcons name="call" size={24} color="white" />
            <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
          </View>
        )
      })}
      
      />
      <Stack.Screen 
      name="contacts" 
      component={screenContacts} 
      options={{ 
        title: 'Contacts',
        headerRight: () => (
          <View style={{ 
              backgroundColor: '#006938',
              width:60, 
              justifyContent : 'space-between',
              flexDirection: 'row',
              marginRight:10,
              
                }}>
              
            <Feather name="search" size={24} color="white" />
            <Feather name="more-vertical" size={24} color="white" />
          </View>
        )
       }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
