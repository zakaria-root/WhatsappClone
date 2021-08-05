import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const NewCallButton = () => {

    const navigation = useNavigation();
    const onclick = () => {
        navigation.navigate('contacts');
        
        
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onclick} >
            <MaterialIcons name="add-call" size={28} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default NewCallButton;