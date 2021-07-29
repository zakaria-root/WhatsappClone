import * as React from 'react';
import { StyleSheet } from 'react-native';
import ChatsListItem from '../components/ChatListItem';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatRoms from '../data/ChatRoms';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ChatsListItem chatrom={ChatRoms[0]}  />
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
