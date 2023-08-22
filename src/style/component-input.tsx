import { StyleSheet } from "react-native";

import Color from "./color";
import Material from './material'

export const estilo = (theme: any) => {
    return StyleSheet.create({
        valid:{
            backgroundColor: Color[theme].cinzaClaro,
            height: 50,
            borderRadius: Material.borderRadius,
            marginVertical: 20,
            paddingLeft: 15,
            borderWidth: 0,
        },
        invalid:{
            backgroundColor: Color[theme].cinzaClaro,
            height: 50,
            borderRadius: Material.borderRadius,
            marginVertical: 20,
            paddingLeft: 15,
            borderColor: Color[theme].vermelhoAviso,
            borderWidth: 2,
        },
        aviso:{
            marginTop: -15,
            marginBottom: 20,
        }
    });
}

export default { estilo }