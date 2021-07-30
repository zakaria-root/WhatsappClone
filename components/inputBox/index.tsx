import React ,{ useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";
import { 
    FontAwesome5, 
    Fontisto, 
    Entypo,
    MaterialCommunityIcons,
    MaterialIcons, 
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";




const InputBox = () => {

    const [message, setMessage ] = useState('');

    const onSendMessage = () => {
        console.warn('send the message: ' +message );
    }
    const onSendMicrophone = () => {
        console.warn('send the audio width microphone: ' );
    }

    const onclick = () =>{
        if (message) {
            onSendMessage();
        }else{
            onSendMicrophone();
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 
                    name="laugh-beam" 
                    size={24} 
                    color={"grey"} />
                <TextInput
                placeholder={"type a message"}
                    style={styles.inputContainer}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo 
                    style={styles.icon} 
                    name="attachment"  
                    size={24} 
                    color={"grey"}/>
                {   
                !message &&
                    <Fontisto 
                    style={styles.icon} 
                    name="camera" 
                    size={24} 
                    color={"grey"} />
                }
            </View>
            <TouchableOpacity onPress={onclick}>
                <View style={styles.buttonContainer}>
                {   
                !message ? 
                    <MaterialCommunityIcons name="microphone"  size={28} color={"white"}/> :
                    <MaterialIcons name="send"  size={28} color={"white"}/>
                }
                </View>
            </TouchableOpacity>
            
        </View>
        
    )
}

export default InputBox;