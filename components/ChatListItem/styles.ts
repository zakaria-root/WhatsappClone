import { StyleSheet } from "react-native";
import { block } from "react-native-reanimated";

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        padding: 10,
    },
    containerleft:{
        flexDirection: "row",
    },
    username:{
        fontSize: 16,
        fontWeight: "bold",
    },
    lastMessage:{
        fontSize: 16,
        color: "grey",
    },
    midel:{
        justifyContent : "space-around"
    },
    time:{
        paddingRight: 25,
        fontSize: 14,
        color: "grey",
    },
    time2:{
        textAlign: "center",
        fontSize: 14,
        color : "#00C15D",
        
    },
    image:{
        width: 65,
        height: 65,
        marginRight: 15,
        borderRadius: 50,
    },
    nbMessage:{
        paddingHorizontal: 7,
        paddingVertical: 1.5,
        textAlign:"center",
        borderRadius: 50,
        marginLeft: 55,
        marginTop:20,
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#00C15D",
        
        

    }
    
});

export default styles;