import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container:{
        width: 50,
        height: 50,
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        justifyContent : "center", 
        alignItems: 'center',
        position : "absolute",
        right :20,
        bottom : 20,
    },
})

export default styles;