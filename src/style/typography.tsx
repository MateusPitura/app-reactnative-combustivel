import { StyleSheet } from "react-native";

import Color from "./color";

export const typography = (theme: any) => {
    return StyleSheet.create({
        header:{
            color: Color[theme].cinzaEscuro,
            fontFamily: "ubuntu-bold",
            fontSize: 22,
            textAlign: "center",
        },
        regular:{
            color: Color[theme].cinzaEscuro,
            fontFamily: "ubuntu-regular",
            fontSize: 18,
        },
        placeholder:{
            color: Color[theme].placeholder,
            fontFamily: "ubuntu-regular",
            fontSize: 18,
        },
        modal:{
            color: Color[theme].cinzaEscuro,
            fontFamily: "ubuntu-regular",
            fontSize: 18,
            textAlign: "center",
        },
        drawerHeader:{
            fontFamily: "ubuntu-bold",
            fontSize: 20,
            //color: Color[theme].branco1,
            color: Color[theme].cinzaEscuro, //Dark
        },
        drawerRegular:{
            fontFamily: "ubuntu-regular",
            fontSize: 18,
            //color: Color[theme].branco1,
            color: Color[theme].cinzaEscuro, //Dark
        },
        button:{
            fontFamily: "ubuntu-regular",
            fontSize: 20,
            textTransform: "uppercase",
            color: Color[theme].branco1,
        },
        highlight:{
            color: Color[theme].vermelho,
        },
        aviso:{
            fontFamily: "ubuntu-regular",
            fontSize: 16,
            color: Color[theme].vermelhoAviso,
        },
        keyboard:{
            fontFamily: "ubuntu-regular",
            fontSize: 96,
            color: Color[theme].keyColor,
        }
    });
}

export default { typography }