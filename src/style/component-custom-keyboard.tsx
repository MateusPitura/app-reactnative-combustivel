import { StyleSheet, Dimensions } from "react-native";
import Color from "./color";

export default StyleSheet.create({
    modal:{
        flex: 1,
        marginTop: "100%",
        marginHorizontal: 0,
        marginBottom: 0,
        backgroundColor: Color.keyboardBackground,
        padding: 5,
        flexDirection: 'row',
    },
    virgula:{
        flex: 1,
        margin: 5,
    },
    flexHeader:{
        flex: 1,
    },
    flexBody:{
        flex: 3,
        alignItems: 'flex-end',
        justifyContent: 'center',
    }
})