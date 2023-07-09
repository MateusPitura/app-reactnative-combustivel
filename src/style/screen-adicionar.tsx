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
        paddingHorizontal: 30,
        backgroundColor: Color.branco,
    },
    pesquisar:{
        paddingBottom: 100,
    },
});