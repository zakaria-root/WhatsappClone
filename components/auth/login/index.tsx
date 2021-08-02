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

export default function Login(){

    const navigation = useNavigation();
    const [state, setState] = useState({
    email: '',
    password :'', 
    });
    const changeValue = () =>  {
        console.warn('is valid plz work');
    }
    const isSignup = false;
    const authHandler  = () => {
        console.warn('you ar not sing up');
        
    }
    const test = () => {
                alert("user is loged");
            }
    const register = () =>{
        navigation.navigate('register')
    }
    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
            <Text style={styles.text}>Login Page</Text>
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
            id="password"
            label="password"
            keyboardType="default"
            secureTextEntry
            required
            submit={!isSignup && authHandler}
            minLength={6}
            maxLength={20}
            autoCapitalize="none"
            errorText="Your password is invalid"
            onInputChange={(password) => {
                setState({
                    ...state,
                    password
                    });
                    }}
            initialValue=""
            outlined
            borderColor={Colors.light.tint}
            />
            <View style={styles.button}>
                <WhatsappButton 
                    title="SING IN" 
                    onPress={test}
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
    );
}