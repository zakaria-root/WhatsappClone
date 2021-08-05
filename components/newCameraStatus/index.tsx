import React from "react";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewCameraStatus = () => {

    const navigation = useNavigation();
    const onclick = () => {
        navigation.navigate('contacts');
        
        
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onclick} >
            <Entypo name="camera" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default NewCameraStatus;