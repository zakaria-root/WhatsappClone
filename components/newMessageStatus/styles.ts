import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container:{
        width: 50,
        height: 50,
        backgroundColor: "#CED4DA",
        borderRadius: 50,
        justifyContent : "center", 
        alignItems: 'center',
        position : "absolute",
        right :28,
        bottom : 180,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 12,
    },
})

export default styles;