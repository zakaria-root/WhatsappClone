import React from 'react';
import { useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Colors from '../../../constants/Colors';
import styles from './styles';
import WhatsappButton from '../../WhatsappButton';
import Input from 'react-native-input-style';
import { useNavigation } from '@react-navigation/core';
import firebase from 'firebase';
import { isLoaded } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import Navigation from '../../../navigation';
import useColorScheme from '../../../hooks/useColorScheme';
import Authoriation from '../Autorisation.';

export default function Login(){

    const navigation = useNavigation();

    const colorScheme = useColorScheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoadedIn, setIsLoadedIn] = useState(false);
    
    


    const register = () => {
        navigation.navigate('register')
    }
    
    const login = () => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            setIsLoaded(true);
            firebase
            .database()
            .ref()
            .child("users/")
            .child(user?.uid)
            .on("value", (doc) => {
                setIsLoaded(false);
                setIsLoadedIn(true);
                
            })
        }).catch((err) => {
            setIsLoaded(false);
            alert(err);
        })
    }

    return isLoaded ? (
        <View style={styles.cercleContainer}>
            <ActivityIndicator size={50} color={Colors.light.tint} />
        </View>
    ) :( isLoadedIn ? <Authoriation isLogedIn={true} /> : (
            <View style={styles.container}>
            <View style={styles.formContainer}>
            <Text style={styles.text}>Login Page</Text>
            <Input
                id="email"
                label="email"
                keyboardType="default"
                required
                errorText="Your email is invalid"
                onInputChange={async (e, email:string) =>{
                    setEmail(email)
                }}
                initialValue={email}
                outlined
                borderColor={Colors.light.tint}
                email
                />
            
            <Input
                id="password"
                label="password"
                keyboardType="default"
                secureTextEntry
                required
                minLength={6}
                maxLength={20}
                autoCapitalize="none"
                errorText="Your password is invalid"
                onInputChange={async (e, password : string) =>{
                    setPassword(password)
                }}
                outlined
                borderColor={Colors.light.tint}
                />
            <View style={styles.button}>
                <WhatsappButton 
                    title="SING IN" 
                    onPress={login}
                    bgColor={Colors.light.tint}
                    />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>You don't have ay count </Text>
                <TouchableOpacity  onPress={register}>
                <Text style={styles.text2} >Sing Up Here</Text>
                </TouchableOpacity>
            </View>
            
            </View>
            

        </View>
    )
        );
}