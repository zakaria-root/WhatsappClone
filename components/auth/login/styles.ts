import { container } from "aws-amplify";
import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
    text:{
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 30,
    },
    container:{
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "gray",
        
    },
    formContainer:{
        width : 340,
        height: 400,
        paddingHorizontal :15,
        backgroundColor :"white",
        borderRadius :18,
        

    },
    button:{
        marginTop: 8,
        paddingHorizontal: 10
    },
    textContainer:{
        flexDirection :"row",
        padding:10,
        justifyContent :"center",
        marginTop :15

    },
    text1:{
        color: "gray"
    },
    text2:{
        paddingHorizontal: 4,
        fontWeight: "bold",
        color : Colors.light.tint
    }
})

export default styles;