import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: Color.vermelhoEscuro,
    },
    header:{
        padding: 10,
    },
    container:{
        flex: 1,
        backgroundColor: Color.branco,
        borderTopStartRadius: 30, //Canto superior esquerdo
        borderTopEndRadius: 30, //Canto superior direito
        padding: 50,
    }
});