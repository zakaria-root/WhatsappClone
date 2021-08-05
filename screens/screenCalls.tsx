import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import calls from '../data/calls';
import Calls from '../components/calls';
import { StyleSheet } from 'react-native';
import Logout from '../components/auth/Logout';
import NewCallButton from '../components/newCallButton';
import NewCallVideoButton from '../components/newCallVideoButton';

const ScreenCalls = () => {
    return(
        <View>
            <FlatList
        style={{ width: "100%" }}
        data={calls}
        renderItem={({item}) => <Calls callrom={item}/>}
        keyExtractor={(item) => (item.id) }
        
      />
      <NewCallVideoButton />
      <NewCallButton />
      <Logout />
        </View>
    )
}

export default ScreenCalls; 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });
  