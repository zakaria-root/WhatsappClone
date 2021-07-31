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


export type chatListRomProps = {
    chatrom : ChatRom,
}

const ChatsListItem = (props: chatListRomProps) => {
    const { chatrom }  = props;
    const navigation = useNavigation();

    const user = chatrom.users[1];

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
                    
                    >{chatrom.lastMessage.content}</Text>
                    </View>
                </View>

                <Text style={styles.time}>{moment(chatrom.lastMessage.createdAt).format('DD/MM/YYYY')}</Text>
                
            </View>
        </TouchableWithoutFeedback>
        
    );
}

export default ChatsListItem;