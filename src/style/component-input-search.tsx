import { StyleSheet } from "react-native";

import Color from "./color";
import Material from './material'

export const estilo = (theme: any) => {
    return StyleSheet.create({
        container:{
            backgroundColor: Color[theme].cinzaClaro,
            height: 50,
            borderRadius: Material.borderRadius,
            marginBottom: 20,
            paddingLeft: 15,
        },
    });
}

export default { estilo }