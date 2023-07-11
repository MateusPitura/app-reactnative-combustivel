import { StyleSheet } from "react-native";

import Color from "./color"
import Material from './material'

export default StyleSheet.create({
    input:{
        backgroundColor: Color.cinzaClaro,
        height: 50,
        borderRadius: Material.borderRadius,
        marginVertical: 20,
        paddingLeft: 15,
        justifyContent: 'center',
    },
    container:{
        flex: 1,
        borderRadius: Material.borderRadius,
        backgroundColor: Color.branco,        
        padding: 20,
        marginBottom: 20,
        elevation: Material.elevation,
        height: 300,
    },
    list:{
        paddingBottom: 10,
    }
});