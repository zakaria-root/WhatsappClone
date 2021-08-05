/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName ,Text, View,Image} from 'react-native';
import SecreenLogin from '../screens/screenLogin';

import Colors  from '../constants/Colors';
import { 
      EvilIcons, 
      Feather,
      FontAwesome5,
      MaterialCommunityIcons,
      MaterialIcons,
      Ionicons
    } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { IsLogedIn, RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import screenChatRom from '../screens/screenChatRom';
import screenContacts from '../screens/screenContacts';
import ScreenRegister from '../screens/screenRegister';
import { useNavigation } from '@react-navigation/native';

export default function Navigation(props) {
  

  
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={props.colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
              backgroundColor: Colors.light.tint,
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
        headerBackImage : () => (
          <View style={{ backgroundColor:Colors.light.tint, flexDirection: 'row' }}>
            <Ionicons name="arrow-back-outline" size={24} color="white" style={{ paddingTop:5 }} />
            <Image 
            source={route.params.image} 
            style={{ 
              width: 38, 
              height: 38,
              borderRadius:50,
              
              }}/>
          </View>
        ),
        title: route.params.name,
        headerTitleStyle:{
          paddingLeft: 15,
          paddingBottom: 5,
        },
        headerRight:() => (

          <View style={{ 
              backgroundColor: Colors.light.tint,
              width:110, 
              justifyContent : 'space-between',
              flexDirection: 'row',
              marginRight:10, 
              }}>
            <FontAwesome5 name="video" size={24} color="white" />
            <MaterialIcons name="call" size={24} color="white" />
            <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
          </View>
        ),
      })}
      
      />
       <Stack.Screen 
      name="login" 
      component={SecreenLogin} 
      options={{ 
        title: 'Authentication',
       }}
      />
      <Stack.Screen 
      name="register" 
      component={ScreenRegister} 
      options={{ 
        title: 'Authentication',
       }}
      />
      <Stack.Screen 
      name="contacts" 
      component={screenContacts} 
      options={{ 
        title: 'Contacts',
        headerRight: () => (
          <View style={{ 
              backgroundColor: Colors.light.tint,
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

function AuthNavigator() {
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
     
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}