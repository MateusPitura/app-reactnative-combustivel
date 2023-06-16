import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: Color.vermelho,
    },
    header:{
        paddingLeft: 10,
        paddingTop: 10,
    },
    shadow:{
        height: 50, 
    },
    corner:{
        height: 50,
        marginTop: 20,
        backgroundColor: Color.branco,
        borderTopStartRadius: 30, //Canto superior esquerdo
        borderTopEndRadius: 30, //Canto superior direito
    },
    container:{
        flex: 1,
        backgroundColor: Color.branco,
        paddingHorizontal: 50,
        paddingVertical: 10,
    },
});