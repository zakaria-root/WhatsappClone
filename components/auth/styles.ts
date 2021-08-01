import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text:{
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
    },
    container:{
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    email:{
        borderWidth : 1,
        padding: 8,
        margin: 10,
        width: 300,
    },
    password:{
        borderWidth : 1,
        padding: 8,
        margin: 10,
        width: 300,
    },
    button:{
        width : 300,
        height :50,

    }
})

export default styles;