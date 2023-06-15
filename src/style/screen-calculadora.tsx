import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    header:{
        flex: 1,
        backgroundColor: Color.vermelhoEscuro,
    },
    main:{
        flex: 1,
        backgroundColor: Color.branco,
        borderTopStartRadius: 30, //Canto superior esquerdo
        borderTopEndRadius: 30, //Canto superior direito
        padding: 50,
    }
});