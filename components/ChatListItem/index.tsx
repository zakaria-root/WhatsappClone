import React from  'react';
import { Text, View } from 'react-native';
import { ChatRom } from '../../types';


export type chatListRomProps = {
    chatrom : ChatRom,
}

const ChatsListItem = (props: chatListRomProps) => {
    const { chatrom }  = props;
    return (
        <View>
            <Text>{chatrom.lastMessage.content}</Text>
        </View>
    );
}

export default ChatsListItem;