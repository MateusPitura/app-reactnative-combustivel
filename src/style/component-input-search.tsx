import { StyleSheet } from "react-native";

import Color from "./color";
import Material from './material'

export default StyleSheet.create({
    container:{
        backgroundColor: Color.cinzaClaro,
        height: 50,
        borderRadius: Material.borderRadius,
        marginBottom: 20,
        paddingLeft: 15,
    },
});