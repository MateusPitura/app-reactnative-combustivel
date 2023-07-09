import { StyleSheet } from "react-native";

import Color from "./color"

export default StyleSheet.create({
    layout:{
        flex: 1,
    },
    header:{
        paddingHorizontal: 10,
        backgroundColor: Color.branco,
    },
    container:{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Color.branco,
    },
    border:{
        flex: 1,
        margin: 10,
    }
});