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
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 5,
        marginBottom: 20,
        elevation: Material.elevation,
        height: 300,
    },
    list:{
        paddingBottom: 15,
    }
});