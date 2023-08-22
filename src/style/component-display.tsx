import { StyleSheet } from "react-native";
import Color from "./color";
import Material from './material'

export const estilo = (theme: any) => {
    return StyleSheet.create({
        display:{
            flex: 3,
            margin: 5,
        },
        button:{
            backgroundColor: Color[theme].keyBackground,
            flex: 1,
            borderRadius: Material.borderRadius,
            alignItems: 'center',
            justifyContent: 'center',
        },
        number:{
            flex: 3,
            backgroundColor: Color[theme].keyboardBackground,
            alignItems: 'center',
            justifyContent: 'center',
        }
    })
}

export default { estilo }