import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: Color.cinzaTransparente,
    },
    container:{
        flex: 1,
        margin: 20,
        padding: 20,
        backgroundColor: Color.branco1,
        borderRadius: 20, 
    },
});