
import React from 'react';
import { Text,Pressable } from 'react-native';
import { StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WhatsappButton(props){

  const { onPress,
        title = 'Save', 
        bgColor='black',
        textColor='white' 
    } = props;
  return (
    <TouchableOpacity 
    style={[
      styles.button,
      {backgroundColor: bgColor}
      ]} 
      onPress={onPress}>
      <Text style={[styles.text,{color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 6,
      elevation: 3,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
    },
  });
