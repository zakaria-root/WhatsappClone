import React from 'react';
import { useState } from 'react';
import { 
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';
import Colors from '../../constants/Colors';
import styles from './styles';
import WhatsappButton from '../WhatsappButton';

export default function Auth(){

    const [state, setState] = useState({
        email: '',
        password :'', 
        confermedPassword:'',
    });
    const test = () => {
        console.warn("test valide");
    }
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Create Acount</Text>
                <TextInput 
                style={styles.email} 
                placeholder={'enter your email'}
                onChangeText={(email) => {
                    setState({
                        ...state,
                        email
                      });
                }}
                value={state.email}
                /> 

                <TextInput 
                style={styles.password}
                placeholder={'enter your password'}
                onChangeText={(password) => {
                    setState({
                        ...state,
                        password
                      });
                }}
                value={state.password}
                /> 

                <TextInput
                style={styles.password} 
                placeholder={'confirme your password'}
                onChangeText={(confermedPassword) => {
                    setState({
                        ...state,
                        confermedPassword
                      });
                }}
                value={state.confermedPassword}
                /> 
                <View style={styles.button}>
                    <WhatsappButton 
                    title="SING UP" 
                    onPress={test}
                    bgColor={Colors.light.tint}
                    />
                {/* <Button title="cvncbvn" color={Colors.light.tint}  /> */}
                </View>
            </View>
        )
    // }
}
