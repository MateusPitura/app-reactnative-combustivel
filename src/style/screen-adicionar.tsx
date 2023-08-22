import { StyleSheet } from "react-native";

import Color from "./color"

export const estilo = (theme: any) => {
    return StyleSheet.create({
        layout:{
            flex: 1,
        },
        header:{
            paddingHorizontal: 10,
            backgroundColor: Color[theme].branco1,
        },
        container:{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: Color[theme].branco1,
        },
        border:{
            flex: 1,
            margin: 10,
        }
    });
}

export default { estilo }