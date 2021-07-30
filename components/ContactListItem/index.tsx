import moment from 'moment';
import React from  'react';
import { 
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons,Ionicons } from '@expo/vector-icons';

import { User } from '../../types';
import styles from './styles';


export type conttactListItemProps = {
    user : User,
}

const ContactListItem = (props: conttactListItemProps) => {
    const { user }  = props;
    const navigation = useNavigation();

    const notUser = () => {
        return user.id === 'u0' || user.id === 'u01';
    }
    const forGroup = () => {
        return user.id === 'u0';
    }
    const onClick = () => {
        // navigate to chatRom
    }
    const isMe = () =>{
        return user.id === "u1";
    }
    return (
        !isMe() &&
        <TouchableWithoutFeedback onPress={onClick}>
             <View style={styles.container}>
                <View style={styles.containerleft}>
                    {!notUser() ? 
                        <Image
                            style={styles.image}
                            source={user.imageUri}
                        /> : 
                        (
                        
                        forGroup() ? <MaterialIcons style={styles.icon} name="group" size={33} color="white" /> :
                        <Ionicons style={styles.icon} name="md-person-add-sharp" size={28} color="white" />
                        
                        )
                    }
                    <View style={styles.midel}>
                    <Text style={styles.username} >{user.name}</Text>
                    {!notUser() && 
                        <Text 
                        style={styles.status}
                        numberOfLines={1} 
                        ellipsizeMode='tail'
                        >{user.status}</Text> 
                    }
                    </View>
                </View>

                
            </View>
        </TouchableWithoutFeedback>
        
    );
}

export default ContactListItem;