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
    drawerHeader:{
        fontFamily: "ubuntu-regular",
        fontSize: 20,
        fontWeight: "bold",
        color: Color.branco,
    },
    drawerRegular:{
        fontFamily: "ubuntu-regular",
        fontSize: 18,
        color: Color.branco,
    },
    button:{
        fontFamily: "ubuntu-regular",
        fontSize: 20,
        textTransform: "uppercase",
        color: Color.branco,
    }
});