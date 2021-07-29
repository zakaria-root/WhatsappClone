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
        <View>
            <Image
        style={styles.image}
        source={user.imageUri}
            />
            <Text>{user.name}</Text>
            <Text>{chatrom.lastMessage.content}</Text>
            <Text>{chatrom.lastMessage.createdAt}</Text>
            
        </View>
    );
}

export default ChatsListItem;