import { StyleSheet } from "react-native";

import Color from "./color";

export const estilo = (theme: any) => {
    return StyleSheet.create({
        background:{
            flex: 1,
            backgroundColor: Color[theme].cinzaTransparente,
        },
        container:{
            flex: 1,
            margin: 20,
            padding: 20,
            backgroundColor: Color[theme].branco1,
            borderRadius: 20, 
        },
    });
}

export default { estilo }
