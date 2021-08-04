import { isLoaded } from "expo-font";
import React, { useState } from "react";
import { View , Text} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Authoriation  = (props : {isLogedIn : boolean}) => {

    const test = () => {

        console.warn("hi" + props.isLogedIn)
    }
    
    const navigation = useNavigation();
    const auth = () => {
        navigation.navigate('login');
    }
    const homme = () => {
        navigation.navigate('Root');
    }
    return props.isLogedIn ? (<View>
        {homme()}
        <Text></Text>
    </View>) : (<View>
        {test()}
        {auth()}
        <Text></Text>
    </View>);
}
export default Authoriation;