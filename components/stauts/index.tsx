import React from "react";
import { View,Text } from "react-native";
import styles from "./styles";
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
const Status = () => {
    return(
        <View style={styles.container}>
            <View style={styles.containerleft}>
            <MaterialIcons style={styles.icon} name="playlist-add" size={35} color="white" />   
                        <View style={styles.midel}>
                    <Text style={styles.username} >My Status</Text>
                    
                        <Text style={styles.status}>
                            Press to add a status
                        </Text> 
                    
                </View>
                
            </View>
            
        </View>
        
    )
}

export default Status;