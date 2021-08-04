import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import styles from "./styles";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import Authoriation from '../Autorisation.';


const Logout = () => {
    const navigation = useNavigation();
    const onclick = () => {
        firebase.auth().signOut();
            navigation.navigate('login')
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onclick} >
            <FontAwesome name="sign-out" size={28} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Logout