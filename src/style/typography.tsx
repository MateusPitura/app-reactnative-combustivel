import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    header:{
        fontFamily: "ubuntu-regular",
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center",
    },
    regular:{
        fontFamily: "ubuntu-regular",
        fontSize: 18,
    },
    modal:{
        fontFamily: "ubuntu-regular",
        fontSize: 18,
        textAlign: "center",
    },
    button:{
        fontFamily: "ubuntu-regular",
        fontSize: 20,
        textTransform: "uppercase",
        color: Color.branco,
    }
});