import { StyleSheet } from "react-native";

import Color from "./color";
import Material from './material'

export const estilo = (theme: any) => {
    return StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: Color[theme].branco2,
        },
        header:{
            flex: 3,
            backgroundColor: Color["commom"].vermelho,
            margin: 10,
            borderRadius: Material.borderRadius,
            elevation: Material.elevation,
        },
        title:{
            padding: 10,
            paddingLeft: 20,
        },
        display:{
            flex: 1,
            flexDirection: "row",
        },
        icon:{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
        },
        text:{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        list:{
            flex: 10,
        },
        button:{
            alignItems: "flex-end",
        },
        item:{
            flexDirection: "row",
            flex: 1, 
        },
        bin:{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
        },
        label:{
            flex: 5, 
            justifyContent: 'center',  
        }
    });
}

export default { estilo }