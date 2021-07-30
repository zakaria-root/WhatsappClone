import React from "react";
import { View , ImageBackground, FlatList} from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/chatMessage";
import Chats from "../data/Chats";
import BG from '../assets/images/BG.png';
import InputBox from "../components/inputBox";

const screenChatRom = () => {
    const route = useRoute();
    
    return(
        <ImageBackground 
        style={{ width: "100%", height: "100%" }}
        source={BG}>
        
            <FlatList 
            data={Chats.messages}
            renderItem={({item}) => <ChatMessage message={item} />}
            inverted
            />
        
        <InputBox />
        </ImageBackground>
    )
}

export default screenChatRom;