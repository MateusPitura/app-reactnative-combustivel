import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    header:{
        fontFamily: "ubuntu-regular",
        fontWeight: "bold",
        fontSize: 22,
    },
    regular:{
        fontFamily: "ubuntu-regular",
        fontSize: 18,
    },
    button:{
        fontFamily: "ubuntu-regular",
        fontSize: 20,
        textTransform: "uppercase",
        color: Color.branco,
    }
});