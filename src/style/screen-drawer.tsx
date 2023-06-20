import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flex: 3,
        backgroundColor: Color.vermelho,
    },
    title:{
        padding: 10,
    },
    display:{
        flexDirection: "row",
    },
    list:{
        flex: 10,
    },
});