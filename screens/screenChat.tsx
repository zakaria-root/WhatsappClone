import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ChatsListItem from '../components/ChatListItem';

import EditScreenInfo from '../components/EditScreenInfo';
import NewMessageButton from '../components/newMessageBtton';
import { Text, View } from 'react-native';
import ChatRoms from '../data/ChatRoms';
import { isLoaded } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import apiKeys from '../config/keys';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoaded : false,
      isAuthenticationRedy : false,
      isAuthenticated : true,
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(apiKeys.firebaseConfig);
      firebase.auth().onAuthStateChanged((user) => {
          this.setState({isAuthenticationRedy : true});
          this.setState({isAuthenticated : !!user});
      })
    }
  }
  render(){
    
    return (
    <View style={styles.container}>
      
     {this.state.isAuthenticated && <ToAuth />} 

      {/* <FlatList
        style={{ width: "100%" }}
        data={ChatRoms}
        renderItem={({item}) => <ChatsListItem chatrom={item}/>}
        keyExtractor={(item) => (item.id) }
        
      />
      <NewMessageButton /> */}
    </View>
  );
}
  
}

// methode can redirected to authentication
export function ToAuth(){
  const navigation =  useNavigation();
  const auth = () => navigation.navigate('auth')
    
  return(
    <View onLayout={auth}>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
