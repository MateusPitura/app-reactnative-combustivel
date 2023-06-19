import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: Color.vermelho,
    },
    header:{
        paddingLeft: 5,
        paddingTop: 5,
        marginBottom: -10,
    },
    shadow:{
        height: 40,
    },
    corner:{
        height: 40,
        marginTop: 20,
        backgroundColor: Color.branco,
        borderTopStartRadius: 20, //Canto superior esquerdo
        borderTopEndRadius: 20, //Canto superior direito
    },
    container:{
        flex: 1,
        backgroundColor: Color.branco,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    button:{
        flex: 1,
        justifyContent: "flex-end",
    },
});