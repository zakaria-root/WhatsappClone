import React from  'react';
import { Text, View , Image} from 'react-native';
import { ChatRom } from '../../types';
import styles from './styles';


export type chatListRomProps = {
    chatrom : ChatRom,
}

const ChatsListItem = (props: chatListRomProps) => {
    const { chatrom }  = props;

    const user = chatrom.users[1];
    const image = user.imageUri;
    return (
        <View style={styles.container}>
            <View style={styles.containerleft}>
                <Image
                    style={styles.image}
                    source={user.imageUri}
                />
                <View style={styles.midel}>
                <Text style={styles.username} >{user.name}</Text>
                <Text style={styles.lastMessage}>{chatrom.lastMessage.content}</Text>
                </View>
            </View>

            <Text style={styles.time}>yesterday</Text>
            
        </View>
    );
}

export default ChatsListItem;