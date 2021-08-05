import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const NewCallVideoButton = () => {

    const navigation = useNavigation();
    const onclick = () => {
        navigation.navigate('contacts');
        
        
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onclick} >
            <Entypo name="video-camera" size={25} color="#3E4346" />
            </TouchableOpacity>
        </View>
    )
}

export default NewCallVideoButton;