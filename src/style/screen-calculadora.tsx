import { StyleSheet } from "react-native";

import Color from "./color";
import Material from "../style/material";

export default StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: Color.vermelho,
    },
    header:{
        padding: 5,
    },
    touchable:{
        height: 50,
        width: 50,
    },
    container:{
        backgroundColor: Color.branco,
        padding: 30,
        borderTopStartRadius: Material.borderRadius,
        borderTopEndRadius: Material.borderRadius,
        height: "100%"
    },
    button:{
        flex: 1,
        justifyContent: "flex-end",
    },
});