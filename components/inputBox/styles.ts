import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container:{
        flexDirection : "row",
        padding: 10,
        alignItems: 'flex-end',
    },
    mainContainer:{
        flexDirection : "row",
        backgroundColor : "white",
        padding : 10,
        borderRadius: 30,
        marginRight : 10,
        flex: 1,
        alignItems: 'flex-end',
    },
    inputContainer:{
        flex: 1,
        paddingHorizontal :10,
        
    },
    icon:{
        paddingHorizontal: 7,
        
    },
    buttonContainer:{
        backgroundColor: Colors.light.tint,
        borderRadius : 50,
        width : 50,
        height :50,
        justifyContent : "center",
        alignItems : "center",
        
        
    }
})

export default styles;