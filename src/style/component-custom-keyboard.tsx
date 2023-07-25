import { StyleSheet } from "react-native";
import Color from "./color";
import Material from './material'

export default StyleSheet.create({
    modal:{
        flex: 1,
        padding: 0,
        margin: 0,
    },
    container:{
        flex: 1,
        marginTop: "100%",
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