import moment from "moment";
import React from "react";
import { View, Text } from "react-native";
import { Message } from "../../types";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

export type ChatMessageProps = {
    message : Message,
    name: string
}

const ChatMessage = (props : ChatMessageProps) => {
    
    const { message, name } = props;
    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return(
        <View style={styles.container}>
            <View style={[
                styles.boxMessage,
                {
                    backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
                    marginRight : isMyMessage() ? 0 : 50,
                    marginLeft : isMyMessage() ? 50 : 0,
                }
                
                ]}>
            {!isMyMessage() && <Text style={styles.name}>{
            name
            }</Text>}
            <Text style={styles.content}>{message.content}</Text>
            <Text style={styles.time}>
                {moment(message.createdAt).format('HH:MM ')}{isMyMessage() && <Ionicons name="checkmark-done" size={22} color="#43d0f5" />}
                
            </Text>
        </View>
        </View>
        
    )
}

export default ChatMessage;