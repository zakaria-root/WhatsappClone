import React from "react";
import { View , Text} from "react-native";
import { useRoute } from "@react-navigation/native";

const screenChatRom = () => {
    const route = useRoute();
    
    
    return(
       
            <Text>
                chat Rom screen
            </Text>
        
    )
}

export default screenChatRom;