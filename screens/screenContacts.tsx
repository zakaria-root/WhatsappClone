import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ChatsListItem from '../components/ChatListItem';
import ContactListItem from '../components/ContactListItem';


import EditScreenInfo from '../components/EditScreenInfo';
import NewMessageButton from '../components/newMessageBtton';
import { View } from '../components/Themed';
import users from '../data/users';


export default function TabTwoScreen() {
  
  return (
    <View style={styles.container}>
      
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({item}) => <ContactListItem user={item}/>}
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
