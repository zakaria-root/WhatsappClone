import React from "react";
import { View ,Text, ImageBackground, FlatList} from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/chatMessage";
import Chats from "../data/Chats";
import BG from '../assets/images/BG.png';
import InputBox from "../components/inputBox";

const screenChatRom = ({route}) => {
    const Route = useRoute();
    const name = route.params?.name;
    
    return(
        
        <ImageBackground 
        style={{ width: "100%", height: "100%" }}
        source={BG}>
        
            <FlatList 
            data={Chats.messages}
            renderItem={({item}) => <ChatMessage message={item} name={name} />}
            inverted
            />
        
        <InputBox />
        </ImageBackground>
    )
}

export default screenChatRom;