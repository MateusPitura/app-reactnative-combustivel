import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    touchable:{
        height: 60,
        width: 60,
        marginTop: 10,
        elevation: 5,
        borderRadius: 60,
        backgroundColor: Color.vermelho,
        margin: 20,
    },
    icon:{
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        borderRadius: 60,
    },
});
