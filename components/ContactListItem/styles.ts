import { StyleSheet } from "react-native";
import { block } from "react-native-reanimated";
import Colors from "../../constants/Colors";

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
    midel:{
        justifyContent : "space-around"
    },
    status:{
        fontSize: 16,
        color: "grey",
        marginRight: 90,
    },
    image:{
        width: 65,
        height: 65,
        marginRight: 15,
        borderRadius: 50,
    },
    
    icon:{
        backgroundColor : "#67EBAA",
        width: 65,
        height: 65,
        marginRight: 15,
        borderRadius: 50,
        justifyContent : "center",
        alignItems: "center",
        paddingTop :16,
        paddingLeft :18,

    }
});

export default styles;