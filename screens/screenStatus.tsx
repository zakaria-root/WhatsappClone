import React from 'react';
import { View } from 'react-native';
import Status from '../components/stauts';
import Logout from '../components/auth/Logout';
import { StyleSheet } from 'react-native';
import NewCameraStatus from '../components/newCameraStatus';
import NewMessageStatus from '../components/newMessageStatus';

const ScreenStatus = () => {
    return(
        <View style={styles.container}>
            
            <Status />
            <NewCameraStatus />
            <Logout />
            <NewMessageStatus />
        </View>
    )
}
export default ScreenStatus;


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
  
});
  