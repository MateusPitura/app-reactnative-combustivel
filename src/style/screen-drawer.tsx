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
        paddingLeft: 20,
    },
    display:{
        flex: 1,
        flexDirection: "row",
    },
    icon:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    list:{
        flex: 10,
    },
});