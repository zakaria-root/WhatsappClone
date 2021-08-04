import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        backgroundColor: "#00C15D",
        borderRadius: 50,
        justifyContent : "center", 
        alignItems: 'center',
        position : "absolute",
        right :20,
        bottom : 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 12,
    },
})

export default styles;