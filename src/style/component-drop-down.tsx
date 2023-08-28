import { StyleSheet } from "react-native";

import Color from "./color"
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
            borderColor: Color["commom"].vermelhoAviso,
            borderWidth: 2,
        },
        box:{
            flex: 1,
            flexDirection: 'row',
        },
        text:{
            justifyContent: 'center',
            flex: 5
        },
        icon:{
            alignItems: "center",
            justifyContent: 'center',
            flex: 1,
        },
        container:{
            flex: 1,
            borderRadius: Material.borderRadius,
            backgroundColor: Color[theme].branco2,        
            padding: 20,
            marginBottom: 20,
            elevation: Material.elevation,
            height: 300,
        },
        list:{
            paddingBottom: 10,
        },
        aviso:{
            marginTop: -15,
            marginBottom: 20,
        }
    });
}

export default { estilo }