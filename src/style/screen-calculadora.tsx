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
    container:{
        backgroundColor: Color.branco,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderTopStartRadius: Material.borderRadius,
        borderTopEndRadius: Material.borderRadius,
        height: "100%"
    },
    button:{
        flex: 1,
        justifyContent: "flex-end",
    },
});