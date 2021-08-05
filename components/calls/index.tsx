import moment from 'moment';
import React from  'react';
import { 
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { callRom } from '../../types';
import { ChatRom } from '../../types';
import styles from './styles';
import { 
    Ionicons,
    MaterialIcons,
    Feather
} from '@expo/vector-icons';
import Colors from '../../constants/Colors';


export type callListRomProps = {
    callrom : callRom,
}

const Calls = (props: callListRomProps) => {
    const { callrom }  = props;
    const navigation = useNavigation();

    const user = callrom.users[1];

    const isTel = () => {
        if (callrom.calls.type === 'tel') {
            return true
        }else{
            return false
        }
    }
    const isMe = () => {
        if (callrom.calls.hoCall === 'zakaria') {
            return true
        }else{
            return false
        }
    }
    const acceptaion = callrom.calls.acc;
    return (
        <TouchableWithoutFeedback >
            <View style={styles.container}>
                <View style={styles.containerleft}>
                    <Image
                        style={styles.image}
                        source={user.imageUri}
                    />
                    <View style={styles.midel}>
                    <Text style={styles.username} >{user.name}</Text>
                    <Text 
                    style={styles.calls}
                    >
                    {isMe() ? 
                    <Feather style={{ padding :100 }}name="arrow-down-left" size={21} color={Colors.light.tint}/> :
                    <Feather name="arrow-up-right" size={21} color={acceptaion ? Colors.light.tint : "red"} />
                    }
                    
                    {moment(callrom.calls.createdAt).format(' D MMM \\a hh:mm')}
                    </Text>
                    </View>
                </View>
                <View style={styles.typeContainer}>
                    {isTel() ? 
                    <MaterialIcons name="call" size={28} color={Colors.light.tint} /> :              
                    <Ionicons name="videocam" size={26} color={Colors.light.tint} />}
                </View>
                
            </View>
        </TouchableWithoutFeedback>
        
    );
}

export default Calls;