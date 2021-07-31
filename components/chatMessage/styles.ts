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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.40,
        shadowRadius: 15.19,

        elevation: 3,
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