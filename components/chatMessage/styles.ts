import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";


const styles  = StyleSheet.create({
    container:{
        padding: 10,
    },
    boxMessage:{
        backgroundColor : "white",
        borderRadius: 10,
        padding: 10,
    },
    name:{
        color : Colors.light.tint,
        fontWeight :"bold",
        marginBottom: 5,
    },
    content:{
    
    },
    time:{
        alignSelf : 'flex-end',
        color : "grey",
        fontSize : 12,
    },
    
})

export default styles;