import { StyleSheet, Dimensions } from "react-native";
import Color from "./color";

const windowHeight = Dimensions.get('screen').height;

export const estilo = (theme: any) => {
    return StyleSheet.create({
        modal:{
            marginTop: (windowHeight/10)*6,
            marginHorizontal: 0,
            marginBottom: 0,
            backgroundColor: Color[theme].keyboardBackground,
        },
        body:{
            flex: 1,
            width: "100%",
            padding: 5,
            flexDirection: 'row',
        },
        virgula:{
            flex: 1,
            margin: 5,
        },
        flexHeader:{
            flex: 1,
        },
        flexBody:{
            flex: 3,
            alignItems: 'flex-end',
            justifyContent: 'center',
        }
    });
}

export default { estilo }