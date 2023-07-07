import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    valid:{
        backgroundColor: Color.cinzaClaro,
        height: 50,
        borderRadius: 10,
        marginVertical: 20,
        paddingLeft: 15,
        borderWidth: 0,
    },
    invalid:{
        backgroundColor: Color.cinzaClaro,
        height: 50,
        borderRadius: 10,
        marginVertical: 20,
        paddingLeft: 15,
        borderColor: Color.vermelhoAviso,
        borderWidth: 2,
    },
    aviso:{
        marginTop: -15,
        marginBottom: 20,
    }
});