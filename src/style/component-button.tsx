import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    container:{
        backgroundColor: Color.vermelho,
        height: 50,
        marginVertical: 20, 
        elevation: 5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    }
});