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

export default function Register(){

    const navigation = useNavigation();
    const [state, setState] = useState({
    name: '',
    email: '',
    password :'', 
    confirmedPassword:''
    });
    const changeValue = () =>  {
        console.warn('is valid plz work');
    }
    const isSignup = false;
    const authHandler  = () => {
        console.warn('you ar not sing up');
        
    }
    const test = () => {
            alert('user created');
    }
    const login = () =>{
        navigation.navigate('login')
    }
    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
            <Text style={styles.text}>Register Page</Text>
            <Input
            onlyEnglish
            id="name"
            label="name"
            keyboardType="default"
            required
            contain=""
            autoCapitalize="sentences"
            errorText="Your name is invalid"
            onInputChange={(name) => {
                    setState({
                        ...state,
                        name
                        });
                        }}
            initialValue=""
            outlined
            borderColor={Colors.light.tint}
            />
            <Input
            onlyEnglish
            id="name"
            label="email"
            keyboardType="default"
            required
            contain=""
            autoCapitalize="sentences"
            errorText="Your name is invalid"
            onInputChange={(email) => {
                    setState({
                        ...state,
                        email
                        });
                        }}
            initialValue=""
            outlined
            borderColor={Colors.light.tint}
            />
            <Input
            onlyEnglish
            id="name"
            label="password"
            keyboardType="default"
            required
            contain=""
            autoCapitalize="sentences"
            errorText="Your name is invalid"
            onInputChange={(password) => {
                    setState({
                        ...state,
                        passsword
                        });
                        }}
            initialValue=""
            outlined
            borderColor={Colors.light.tint}
            />
            <Input
            id="password"
            label="confirmed password"
            keyboardType="default"
            secureTextEntry
            required
            submit={!isSignup && authHandler}
            minLength={6}
            maxLength={20}
            autoCapitalize="none"
            errorText="Your password is invalid"
            onInputChange={(confirmedPassword) => {
                setState({
                    ...state,
                    confirmedPassword
                    });
                    }}
            initialValue=""
            outlined
            borderColor={Colors.light.tint}
            />
            <View style={styles.button}>
                <WhatsappButton 
                    title="SING UP" 
                    onPress={test}
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