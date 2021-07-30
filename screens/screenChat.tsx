import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ChatsListItem from '../components/ChatListItem';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatRoms from '../data/ChatRoms';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={ChatRoms}
        renderItem={({item}) => <ChatsListItem chatrom={item}/>}
        keyExtractor={(item) => (item.id) }
        
      />

      
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
