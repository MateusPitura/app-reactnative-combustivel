import { StyleSheet } from "react-native";

import Color from "./color";

export default StyleSheet.create({
    touchable:{
        height: 50,
        marginHorizontal: 10,
        marginTop: 10,
        elevation: 5,
        borderRadius: 10,
    },
    container:{
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: Color.branco,
    },
    icon:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.vermelho,
        borderRadius: 10,
    },
    text:{
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    }
});
