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
        fontSize: 16,
        color: "grey",
    },
    image:{
        width: 65,
        height: 65,
        marginRight: 15,
        borderRadius: 50,
    },
    
});

export default styles;