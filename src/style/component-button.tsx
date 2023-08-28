import { StyleSheet } from "react-native";

import Color from "./color";
import Material from './material'

export const estilo = (theme: any) => {
    return StyleSheet.create({
        container:{
            backgroundColor: Color["commom"].vermelho,
            height: 50,
            marginVertical: 20, 
            elevation: Material.elevation,
            borderRadius: Material.borderRadius,
            alignItems: "center",
            justifyContent: "center",
        }
    });
}

export default { estilo }