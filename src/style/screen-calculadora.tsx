import { StyleSheet } from "react-native";

import Color from "./color";
import Material from "../style/material";

export const estilo = (theme: any) => {
    return StyleSheet.create({
        background:{
            flex: 1,
            backgroundColor: Color["commom"].vermelho,
        },
        header:{
            padding: 5,
        },
        touchable:{
            height: 50,
            width: 50,
        },
        container:{
            backgroundColor: Color[theme].branco1,
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
}

export default { estilo }
