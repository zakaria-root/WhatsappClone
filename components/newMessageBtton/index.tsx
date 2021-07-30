import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewMessageButton = () => {

    const navigation = useNavigation();
    const onclick = () => {
        navigation.navigate('contacts');
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onclick} >
                <MaterialCommunityIcons name="message-reply-text" size={28} color={"white"}/>
            </TouchableOpacity>
        </View>
    )
}

export default NewMessageButton;