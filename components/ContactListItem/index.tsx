import moment from 'moment';
import React from  'react';
import { 
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { User } from '../../types';
import styles from './styles';


export type conttactListItemProps = {
    user : User,
}

const ContactListItem = (props: conttactListItemProps) => {
    const { user }  = props;
    const navigation = useNavigation();


    const onClick = () => {
        // navigate to chatRom
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
                    <Text style={styles.status}>{user.status}</Text>
                    </View>
                </View>

                
            </View>
        </TouchableWithoutFeedback>
        
    );
}

export default ContactListItem;