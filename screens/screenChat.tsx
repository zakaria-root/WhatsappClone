import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ChatsListItem from '../components/ChatListItem';

import EditScreenInfo from '../components/EditScreenInfo';
import NewMessageButton from '../components/newMessageBtton';
import { Text, View } from 'react-native';
import ChatRoms from '../data/ChatRoms';
import { isLoaded } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';
import firebase from 'firebase';
import apiKeys from '../config/keys';
import { useState } from 'react';

import Authoriation from '../components/auth/Autorisation.';
import Logout from '../components/auth/Logout';

export default function ScreenChat(){


    
    return (
    <View style={styles.container}>
      
      {/* <Authoriation /> */}
      <FlatList
        style={{ width: "100%" }}
        data={ChatRoms}
        renderItem={({item}) => <ChatsListItem chatrom={item}/>}
        keyExtractor={(item) => (item.id) }
        
      />
      <NewMessageButton />
      <Logout />
      
    </View>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
