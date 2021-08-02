import React from 'react';
import { useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../../constants/Colors';
import styles from './styles';
import WhatsappButton from '../../WhatsappButton';
import Input from 'react-native-input-style';
import { useNavigation } from '@react-navigation/core';
import firebase from 'firebase';

export default function Register(){

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Cpassword, setCpassword] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    // const isSignup = false;
    // const authHandler  = () => {
    //     console.warn('you ar not sing up');
        
    // }
    
    const registerUser = () => {
        if (name && email && password && Cpassword) {
            if (password === Cpassword) {
                setIsLoaded(true);
                firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
                .then(({user}) => {
                    user?.updateProfile({displayName : name});

                    firebase
                    .database()
                    .ref()
                    .child("users/")
                    .child(user?.uid)
                    .set({name, email, password})
                    .then(() => {
                        setIsLoaded(false);
                        navigation.navigate('login');
                    })
                    .catch((err) => {
                        alert(err);
                        setIsLoaded(false);
                    })
                }).catch((err) => {
                    alert(err);
                    setIsLoaded(false);
                })
            }else{
                alert('confirm password is not correct')
            }
        }else{
            alert('please fil the form corectly !')
        }
    }
    const login = () =>{
        navigation.navigate('login')
    }
    return isLoaded ? (
        <View style={styles.cercleContainer}>
            <ActivityIndicator size={50} color={Colors.light.tint} />
        </View>
    ) : (
        <View style={styles.container}>
        <View style={styles.formContainer}>
        <Text style={styles.text}>Register Page</Text>
        <Input
        onlyEnglish
        id="name"
        label="name"
        keyboardType="default"
        required
        autoCapitalize="sentences"
        errorText="Your name is invalid"
        onInputChange={async (e, name) =>{
            setName(name)
        }}
        initialValue={name}
        outlined
        borderColor={Colors.light.tint}
        />
        <Input
        id="email"
        label="email"
        keyboardType="default"
        required
        errorText="Your email is invalid"
        onInputChange={async (e, email) =>{
            setEmail(email)
        }}
        initialValue={email}
        outlined
        borderColor={Colors.light.tint}
        email
        />
        <Input
        id="confirmed password"
        label="password"
        keyboardType="default"
        secureTextEntry
        required
        minLength={6}
        maxLength={20}
        autoCapitalize="none"
        errorText="Your password is invalid"
        onInputChange={async (e, password) =>{
            setPassword(password)
        }}
        outlined
        borderColor={Colors.light.tint}
        />
        <Input
        id="confirmed password"
        label="confirmed password"
        keyboardType="default"
        secureTextEntry
        required
        minLength={6}
        maxLength={20}
        autoCapitalize="none"
        errorText="Your confirme password is invalid"
        onInputChange={async (e, Cpassword) =>{
            setCpassword(Cpassword)
        }}
        
        outlined
        borderColor={Colors.light.tint}
        />
        <View style={styles.button}>
            <WhatsappButton 
                title="SING UP" 
                onPress={registerUser}
                bgColor={Colors.light.tint}
                />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>You have acount ?</Text>
            <TouchableOpacity  onPress={login}>
            <Text style={styles.text2} >Back To Login</Text>
            </TouchableOpacity>
        </View>
        
        </View>
        

    </View>
    );

}