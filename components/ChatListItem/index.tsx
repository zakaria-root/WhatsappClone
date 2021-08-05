import moment from 'moment';
import React from  'react';
import { 
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ChatRom } from '../../types';
import styles from './styles';
import { color } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

export type chatListRomProps = {
    chatrom : ChatRom,
}

const ChatsListItem = (props: chatListRomProps) => {
    const { chatrom }  = props;
    const navigation = useNavigation();

    const user = chatrom.users[1];
    const  a = moment(chatrom.lastMessage.createdAt);
    const  b = moment();
    const Diff = b.diff(a, 'days') // 1
    const onClick = () => {
        navigation.navigate(
                'ChatRom', 
                {
                    id: chatrom.id, 
                    name: user.name,
                    image: user.imageUri,
                }
                );
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.containerleft}>
                    <Image
                        style={styles.image}
                        source={user.imageUri}
                    />
                    <View style={styles.midel}>
                    <Text style={styles.username} >{user.name}</Text>
                    <Text 
                    style={styles.lastMessage}
                    numberOfLines={1} 
                    ellipsizeMode={"tail"}
                    
                    ><Ionicons name="checkmark-done" size={20} color="gray" />{" " + chatrom.lastMessage.content}</Text>
                    </View>
                </View>
                <View >
                    <Text style={chatrom.lastMessage.reder ? styles.time : styles.time2}  >
                        {Diff === 0 ?
                        a.format('hh:mm') :
                        Diff === 1 ? 'hier' :
                        a.format('DD/MM/YY') }
                    </Text>
                    {!chatrom.lastMessage.reder && <Text style={styles.nbMessage}>{chatrom.lastMessage.nbOfContent}</Text>}
                </View>
                
            </View>
        </TouchableWithoutFeedback>
        
    );
}

export default ChatsListItem;